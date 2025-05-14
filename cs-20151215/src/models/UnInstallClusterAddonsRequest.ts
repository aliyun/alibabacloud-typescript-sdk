// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnInstallClusterAddonsRequestAddons } from "./UnInstallClusterAddonsRequestAddons";


export class UnInstallClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of components that you want to uninstall. The list is an array.
   */
  addons?: UnInstallClusterAddonsRequestAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': UnInstallClusterAddonsRequestAddons },
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

