// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResultsExt } from "./ImageBatchModerationResponseBodyDataResultsExt";
import { ImageBatchModerationResponseBodyDataResultsResult } from "./ImageBatchModerationResponseBodyDataResultsResult";


export class ImageBatchModerationResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Image supplementary reference information.
   */
  ext?: ImageBatchModerationResponseBodyDataResultsExt;
  /**
   * @remarks
   * The risk labels, confidence scores, and other parameters of image detection results, in an array structure.
   */
  result?: ImageBatchModerationResponseBodyDataResultsResult[];
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The enhanced image detection service supports various detection services.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      result: 'Result',
      riskLevel: 'RiskLevel',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: ImageBatchModerationResponseBodyDataResultsExt,
      result: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsResult },
      riskLevel: 'string',
      service: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

