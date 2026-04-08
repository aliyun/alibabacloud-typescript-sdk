// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: string };
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
      errorLogs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(this.errorLogs) {
      $dara.Model.validateMap(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

