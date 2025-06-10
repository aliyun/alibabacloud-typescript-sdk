// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataPredictCVDLesion } from "./ScreenChestCtresponseBodyDataPredictCvdlesion";


export class ScreenChestCTResponseBodyDataPredictCVD extends $dara.Model {
  lesion?: ScreenChestCTResponseBodyDataPredictCVDLesion;
  seriesInstanceUid?: string;
  static names(): { [key: string]: string } {
    return {
      lesion: 'Lesion',
      seriesInstanceUid: 'SeriesInstanceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesion: ScreenChestCTResponseBodyDataPredictCVDLesion,
      seriesInstanceUid: 'string',
    };
  }

  validate() {
    if(this.lesion && typeof (this.lesion as any).validate === 'function') {
      (this.lesion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

