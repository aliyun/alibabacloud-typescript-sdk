// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneEngineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the DPI engine configuration.
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
   * this is a clone config.
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
   * The instance ID. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The scene.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      instanceId: 'InstanceId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      instanceId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

