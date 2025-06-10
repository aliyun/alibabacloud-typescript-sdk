// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectSkinDiseaseResponseBodyData } from "./DetectSkinDiseaseResponseBodyData";


export class DetectSkinDiseaseResponseBody extends $dara.Model {
  data?: DetectSkinDiseaseResponseBodyData;
  /**
   * @example
   * DE9ABC80-4DD4-4F1B-B95C-D0E438B8FE56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectSkinDiseaseResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

