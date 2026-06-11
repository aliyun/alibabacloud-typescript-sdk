// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPluginStatus extends $dara.Model {
  /**
   * @remarks
   * An object containing error logs, where each key is a string identifying an error and the value is a string describing that error.
   */
  errorLogs?: { [key: string]: any }[];
  /**
   * @remarks
   * The unique identifier of the plugin.
   */
  pluginId?: string;
  /**
   * @remarks
   * Indicates if the service is healthy. `true` indicates normal operation, and `false` indicates an issue.
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

