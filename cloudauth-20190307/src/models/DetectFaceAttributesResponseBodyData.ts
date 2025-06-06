// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectFaceAttributesResponseBodyDataFaceInfos } from "./DetectFaceAttributesResponseBodyDataFaceInfos";


export class DetectFaceAttributesResponseBodyData extends $dara.Model {
  faceInfos?: DetectFaceAttributesResponseBodyDataFaceInfos;
  /**
   * @example
   * 1920
   */
  imgHeight?: number;
  /**
   * @example
   * 1080
   */
  imgWidth?: number;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      imgHeight: 'ImgHeight',
      imgWidth: 'ImgWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: DetectFaceAttributesResponseBodyDataFaceInfos,
      imgHeight: 'number',
      imgWidth: 'number',
    };
  }

  validate() {
    if(this.faceInfos && typeof (this.faceInfos as any).validate === 'function') {
      (this.faceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

