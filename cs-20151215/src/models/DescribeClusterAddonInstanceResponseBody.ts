// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The component configuration.
   * 
   * @example
   * {"NetworkPolicy":"true"}
   */
  config?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * terway-eniip
   */
  name?: string;
  /**
   * @remarks
   * The component status. Valid values:
   * 
   * - initial: installing
   * - active: installed
   * - unhealthy: abnormal
   * - upgrading: upgrading
   * - updating: updating
   * - deleting: uninstalling
   * - deleted: deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The component version.
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

