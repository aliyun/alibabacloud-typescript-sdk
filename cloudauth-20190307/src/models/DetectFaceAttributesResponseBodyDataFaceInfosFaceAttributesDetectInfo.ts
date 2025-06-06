// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes } from "./DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes";
import { DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect } from "./DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect";


export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo extends $dara.Model {
  faceAttributes?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes;
  faceRect?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect;
  static names(): { [key: string]: string } {
    return {
      faceAttributes: 'FaceAttributes',
      faceRect: 'FaceRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributes: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes,
      faceRect: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect,
    };
  }

  validate() {
    if(this.faceAttributes && typeof (this.faceAttributes as any).validate === 'function') {
      (this.faceAttributes as any).validate();
    }
    if(this.faceRect && typeof (this.faceRect as any).validate === 'function') {
      (this.faceRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

