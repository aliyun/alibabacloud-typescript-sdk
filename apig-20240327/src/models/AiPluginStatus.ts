// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPluginStatus extends $dara.Model {
  /**
   * @remarks
   * The list of plug-in runtime error logs. Each item is a map[string]any key-value pair.
   */
  errorLogs?: { [key: string]: any }[];
  /**
   * @remarks
   * The plug-in instance ID.
   * 
   * @example
   * pi-xxx
   */
  pluginId?: string;
  /**
   * @remarks
   * Indicates whether the backend service that the plug-in depends on is healthy.
   * 
   * @example
   * true
   */
  serviceHealthy?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'errorLogs',
      pluginId: 'pluginId',
      serviceHealthy: 'serviceHealthy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorLogs)) {
      $dara.Model.validateArray(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

