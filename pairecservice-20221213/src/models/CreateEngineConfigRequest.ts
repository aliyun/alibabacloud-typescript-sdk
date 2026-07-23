// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the engine config.
   * 
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - `Daily`: The daily environment.
   * 
   * - `Pre`: The pre-production environment.
   * 
   * - `Prod`: The production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The ID of the instance. You can obtain this ID by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * @example
   * pairec-cn-***test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the engine config.
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

