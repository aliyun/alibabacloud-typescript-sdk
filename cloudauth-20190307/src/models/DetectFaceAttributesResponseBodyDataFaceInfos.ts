// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo } from "./DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo";


export class DetectFaceAttributesResponseBodyDataFaceInfos extends $dara.Model {
  faceAttributesDetectInfo?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo[];
  static names(): { [key: string]: string } {
    return {
      faceAttributesDetectInfo: 'FaceAttributesDetectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributesDetectInfo: { 'type': 'array', 'itemType': DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo },
    };
  }

  validate() {
    if(Array.isArray(this.faceAttributesDetectInfo)) {
      $dara.Model.validateArray(this.faceAttributesDetectInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

