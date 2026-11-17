// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorRuntime extends $dara.Model {
  /**
   * @remarks
   * The native client capability referenced by the SATELLITE runtime. This parameter is mutually exclusive with extensionName.
   * 
   * @example
   * bash
   */
  capabilityId?: string;
  /**
   * @remarks
   * The environment agent extension name referenced by the SATELLITE runtime. This parameter is mutually exclusive with capabilityId.
   * 
   * @example
   * gitlab-corp
   */
  extensionName?: string;
  /**
   * @remarks
   * Runtime mode
   * 
   * This parameter is required.
   * 
   * @example
   * STAROPS_MANAGED
   */
  mode?: string;
  /**
   * @remarks
   * Plugin ID
   * 
   * @example
   * gitlab
   */
  pluginId?: string;
  /**
   * @remarks
   * Satellite ID
   * 
   * @example
   * satellite-private-runtime
   */
  satelliteId?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityId: 'capabilityId',
      extensionName: 'extensionName',
      mode: 'mode',
      pluginId: 'pluginId',
      satelliteId: 'satelliteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityId: 'string',
      extensionName: 'string',
      mode: 'string',
      pluginId: 'string',
      satelliteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

