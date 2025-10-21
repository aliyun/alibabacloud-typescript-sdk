// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInstanceInfoRequest extends $dara.Model {
  /**
   * @example
   * 123
   */
  modelInstanceId?: number;
  /**
   * @example
   * 2
   */
  sceneType?: number;
  static names(): { [key: string]: string } {
    return {
      modelInstanceId: 'ModelInstanceId',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelInstanceId: 'number',
      sceneType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

