// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEngineConfigRequest extends $dara.Model {
  /**
   * @example
   * {
   * 	"ListenConf": {
   * 		"HttpAddr": "",
   * 		"HttpPort": 8000
   * 	}
   * }
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

