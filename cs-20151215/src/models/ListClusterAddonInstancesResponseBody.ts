// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterAddonInstancesResponseBodyAddons } from "./ListClusterAddonInstancesResponseBodyAddons";


export class ListClusterAddonInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of components that are installed in the cluster.
   */
  addons?: ListClusterAddonInstancesResponseBodyAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListClusterAddonInstancesResponseBodyAddons },
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

