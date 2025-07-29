// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAddonInstancesResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The status of the component. Valid values:
   * 
   * *   active: The component is installed.
   * *   updating: The component is being modified.
   * *   upgrading: The component is being updated.
   * *   deleting: The component is being uninstalled.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the component.
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

