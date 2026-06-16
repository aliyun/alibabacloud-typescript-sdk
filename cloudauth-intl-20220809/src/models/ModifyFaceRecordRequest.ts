// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFaceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The face library code.
   * 
   * This parameter is required.
   * 
   * @example
   * 4EB35****87
   */
  faceGroupCode?: string;
  /**
   * @remarks
   * The OSS information of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  imgOssInfos?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupCode: 'FaceGroupCode',
      imgOssInfos: 'ImgOssInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupCode: 'string',
      imgOssInfos: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

