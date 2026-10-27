// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAddonInstancesResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The add-on status. Valid values:
   * - active: Installed.
   * - updating: Modifying.
   * - upgrading: Upgrading.
   * - deleting: Uninstalling.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The add-on version.
   * 
   * @example
   * v1.9.3.10-7dfca203-aliyun
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      state: 'string',
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

export class ListClusterAddonInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of installed add-on instances.
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

