// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the engine configuration.
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
   * - Daily: The daily environment.
   * 
   * - Pre: The pre-release environment.
   * 
   * - Prod: The production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. To obtain an instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

