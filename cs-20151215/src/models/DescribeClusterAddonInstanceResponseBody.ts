// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the add-on.
   * 
   * @example
   * {"NetworkPolicy":"true"}
   */
  config?: string;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * terway-eniip
   */
  name?: string;
  /**
   * @remarks
   * The state of the add-on. Valid values:
   * 
   * - initial: The add-on is being installed.
   * - active: The add-on is installed.
   * - unhealthy: The add-on is in an abnormal state.
   * - upgrading: The add-on is being upgraded.
   * - updating: The add-on is being updated.
   * - deleting: The add-on is being uninstalled.
   * - deleted: The add-on is deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the add-on.
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

