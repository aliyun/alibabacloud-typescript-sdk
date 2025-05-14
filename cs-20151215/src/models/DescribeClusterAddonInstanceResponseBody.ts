// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the component.
   * 
   * @example
   * {"NetworkPolicy":"true"}
   */
  config?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * terway-eniip
   */
  name?: string;
  /**
   * @remarks
   * The status of the component. Valid values:
   * 
   * *   initial: The component is being installed.
   * *   active: The component has been installed.
   * *   unhealthy: The component is in an abnormal state.
   * *   upgrading: The component is undergoing an upgrade.
   * *   updating: Component configuration changes are being applied.
   * *   deleting: The component is being uninstalled.
   * *   deleted: The component has been deleted.
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
   * v1.4.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

