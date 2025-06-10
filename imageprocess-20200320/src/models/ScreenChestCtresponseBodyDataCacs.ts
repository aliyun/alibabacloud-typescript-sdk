// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataCACSDetections } from "./ScreenChestCtresponseBodyDataCacsdetections";


export class ScreenChestCTResponseBodyDataCACS extends $dara.Model {
  detections?: ScreenChestCTResponseBodyDataCACSDetections[];
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-cacs/2020-09-29/2020-09-29-11%3A07%3A41-D74FE0DF-8F80-41EB-B08B-2E67053587EC.tar.gz?Expires=1601350661&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=iB16ms28Y5mzB11ghYUd7upCi4****
   */
  resultUrl?: string;
  /**
   * @example
   * 4.83
   */
  score?: string;
  /**
   * @example
   * 1.2.392.489642.9116.2.6.1.44063.1986736248.1658817546.650139
   */
  seriesInstanceUID?: string;
  /**
   * @example
   * 111.96
   */
  volumeScore?: string;
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      resultUrl: 'ResultUrl',
      score: 'Score',
      seriesInstanceUID: 'SeriesInstanceUID',
      volumeScore: 'VolumeScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataCACSDetections },
      resultUrl: 'string',
      score: 'string',
      seriesInstanceUID: 'string',
      volumeScore: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detections)) {
      $dara.Model.validateArray(this.detections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

