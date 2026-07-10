// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the ID Verification request.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @remarks
   * The image return type.
   * 
   * @example
   * JPG
   */
  pictureReturnType?: string;
  /**
   * @remarks
   * The ID of the verification scenario.
   * 
   * @example
   * 1000000006
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      pictureReturnType: 'PictureReturnType',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      pictureReturnType: 'string',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

