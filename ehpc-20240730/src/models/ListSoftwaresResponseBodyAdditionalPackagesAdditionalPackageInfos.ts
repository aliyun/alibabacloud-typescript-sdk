// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions } from "./ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions";


export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $dara.Model {
  /**
   * @remarks
   * The application category.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The software description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the software icon.
   * 
   * @example
   * https://gw.alicdn.com/imgextra/i2/O1CN01FIkxZ81LmE0fvrAyR_!!6000000001341-55-tps-6349-1603.svg
   */
  icon?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The information about the software versions that can be installed in the cluster.
   */
  versions?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      versions: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions,
    };
  }

  validate() {
    if(this.versions && typeof (this.versions as any).validate === 'function') {
      (this.versions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

