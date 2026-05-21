// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: any }[];
  pluginId?: string;
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

