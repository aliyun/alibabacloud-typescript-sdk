// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSubSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  sceneId?: string;
  /**
   * @example
   * IMAGE
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sceneId: 'SceneId',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sceneId: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

