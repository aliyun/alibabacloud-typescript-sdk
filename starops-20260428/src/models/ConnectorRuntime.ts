// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorRuntime extends $dara.Model {
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
      mode: 'mode',
      pluginId: 'pluginId',
      satelliteId: 'satelliteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

