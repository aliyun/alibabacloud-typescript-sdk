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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * update config
   */
  description?: string;
  /**
   * @remarks
   * The runtime environment.
   * 
   * Valid values:
   * 
   * - Daily: daily environment.
   * 
   * - Pre: staging environment.
   * 
   * - Prod: production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The engine configuration name.
   * 
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @remarks
   * The engine configuration type.
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

