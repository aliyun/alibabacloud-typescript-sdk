// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParamRequest extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * home
   */
  name?: string;
  /**
   * @example
   * 4
   */
  sceneId?: string;
  type?: string;
  /**
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

