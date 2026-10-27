// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The add-on configuration.
   * 
   * @example
   * {"NetworkPolicy":"true"}
   */
  config?: string;
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * terway-eniip
   */
  name?: string;
  /**
   * @remarks
   * The add-on state. Valid values:
   * - initial: Installing.
   * - active: Installed.
   * - unhealthy: Abnormal.
   * - upgrading: Upgrading.
   * - updating: Updating.
   * - deleting: Uninstalling.
   * - deleted: Deleted.
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

