// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the engine configuration.
   * 
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
   * @remarks
   * The environment.
   * 
   * - Daily: Daily environment.
   * 
   * - Pre: Pre-production environment.
   * 
   * - Prod: Production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. To get the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the engine configuration.
   * 
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

