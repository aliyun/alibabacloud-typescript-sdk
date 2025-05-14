// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterAddonInstanceResponseBodyLogging } from "./GetClusterAddonInstanceResponseBodyLogging";


export class GetClusterAddonInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom configurations of the component.
   * 
   * @example
   * {"sls_project_name":""}
   */
  config?: string;
  /**
   * @remarks
   * The status of Simple Log Service.
   */
  logging?: GetClusterAddonInstanceResponseBodyLogging;
  /**
   * @remarks
   * The name of the component instance.
   * 
   * @example
   * ack-node-problem-detector
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
   * The version of the component instance.
   * 
   * @example
   * 1.2.16
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      logging: 'logging',
      name: 'name',
      state: 'state',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      logging: GetClusterAddonInstanceResponseBodyLogging,
      name: 'string',
      state: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

