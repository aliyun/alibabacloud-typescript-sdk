// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLungNoduleResponseBodyDataSeriesElements } from "./DetectLungNoduleResponseBodyDataSeriesElements";


export class DetectLungNoduleResponseBodyDataSeries extends $dara.Model {
  elements?: DetectLungNoduleResponseBodyDataSeriesElements[];
  /**
   * @remarks
   * 1
   */
  origin?: number[];
  report?: string;
  /**
   * @example
   * 1.3.6.1.4.1.14519.5.2.1.6279.6001.179049373636438705059720603192
   */
  seriesInstanceUid?: string;
  /**
   * @remarks
   * 1
   */
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      origin: 'Origin',
      report: 'Report',
      seriesInstanceUid: 'SeriesInstanceUid',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectLungNoduleResponseBodyDataSeriesElements },
      origin: { 'type': 'array', 'itemType': 'number' },
      report: 'string',
      seriesInstanceUid: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
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

