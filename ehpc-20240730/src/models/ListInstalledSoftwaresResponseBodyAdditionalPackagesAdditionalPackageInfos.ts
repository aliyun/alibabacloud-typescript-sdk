// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $dara.Model {
  /**
   * @remarks
   * The category into which the software falls.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The time when the software was installed.
   * 
   * @example
   * 2024-03-05 18:24:08
   */
  createTime?: string;
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
   * The installation status of the software.
   * 
   * Valid values:
   * 
   * *   Installed
   * *   Uninstalled
   * *   Installing
   * *   Exception
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

