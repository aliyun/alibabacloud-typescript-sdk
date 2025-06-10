// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataCalcBMDDetections } from "./ScreenChestCtresponseBodyDataCalcBmddetections";


export class ScreenChestCTResponseBodyDataCalcBMD extends $dara.Model {
  detections?: ScreenChestCTResponseBodyDataCalcBMDDetections[];
  origin?: number[];
  resultURL?: string;
  seriesInstanceUid?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      resultURL: 'ResultURL',
      seriesInstanceUid: 'SeriesInstanceUid',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataCalcBMDDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
      seriesInstanceUid: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.detections)) {
      $dara.Model.validateArray(this.detections);
    }
    if(Array.isArray(this.origin)) {
      $dara.Model.validateArray(this.origin);
    }
    if(Array.isArray(this.spacing)) {
      $dara.Model.validateArray(this.spacing);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

