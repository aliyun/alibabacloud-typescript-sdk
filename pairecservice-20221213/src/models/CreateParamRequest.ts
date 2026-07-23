// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParamRequest extends $dara.Model {
  /**
   * @remarks
   * The environment to which the parameter belongs. Valid values:
   * - Daily: daily environment.
   * - Pre: staging environment.
   * - Prod: production environment.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can call the ListInstances operation to obtain the instance ID.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * home
   */
  name?: string;
  /**
   * @remarks
   * The scene ID. You can call the ListScenes operation to obtain the scene ID.
   * 
   * @example
   * 4
   */
  sceneId?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - Normal: common parameter.
   * 
   * - Encryption: encrypted parameter.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * house
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      sceneId: 'SceneId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      sceneId: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

