// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the engine configuration.
   * 
   * @example
   * {}
   */
  configValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * this is a test config
   */
  description?: string;
  /**
   * @remarks
   * The runtime environment. Valid values:
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
   * The instance ID. You can obtain the ID from the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
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
  /**
   * @remarks
   * The type of the engine configuration.
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

