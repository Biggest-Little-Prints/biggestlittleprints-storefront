import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import CountrySelectWrapper from "@modules/layout/components/country-select-wrapper"

const NavItems = {
  Home: "/",
  Store: "/store"
}

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-small-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-medium-light">
          <div className="flex-1 basis-0 h-full flex items-center">
            <ul className="flex flex-row gap-6 items-center justify-center">
              {Object.entries(NavItems).map(([name, href]) => {
                return (
                  <li key={name}>
                    <LocalizedClientLink
                      href={href}
                      className="hover:text-ui-fg-disabled"
                      data-testid={`${name.toLowerCase()}-link`}
                    >
                      {name}
                    </LocalizedClientLink>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Biggest Little Prints
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {regions && (
                <CountrySelectWrapper
                  regions={regions}
                />
              )}
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
