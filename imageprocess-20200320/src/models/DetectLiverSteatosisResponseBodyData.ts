// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLiverSteatosisResponseBodyDataDetections } from "./DetectLiverSteatosisResponseBodyDataDetections";


export class DetectLiverSteatosisResponseBodyData extends $dara.Model {
  detections?: DetectLiverSteatosisResponseBodyDataDetections[];
  origin?: number[];
  resultUrl?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      resultUrl: 'ResultUrl',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': DetectLiverSteatosisResponseBodyDataDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      resultUrl: 'string',
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

