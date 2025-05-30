// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPackagesResponseBodyDataCreatedPackages } from "./ListPackagesResponseBodyDataCreatedPackages";
import { ListPackagesResponseBodyDataInstalledPackages } from "./ListPackagesResponseBodyDataInstalledPackages";


export class ListPackagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The packages that were created.
   */
  createdPackages?: ListPackagesResponseBodyDataCreatedPackages[];
  /**
   * @remarks
   * The packages that were installed.
   */
  installedPackages?: ListPackagesResponseBodyDataInstalledPackages[];
  static names(): { [key: string]: string } {
    return {
      createdPackages: 'createdPackages',
      installedPackages: 'installedPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataCreatedPackages },
      installedPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataInstalledPackages },
    };
  }

  validate() {
    if(Array.isArray(this.createdPackages)) {
      $dara.Model.validateArray(this.createdPackages);
    }
    if(Array.isArray(this.installedPackages)) {
      $dara.Model.validateArray(this.installedPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

