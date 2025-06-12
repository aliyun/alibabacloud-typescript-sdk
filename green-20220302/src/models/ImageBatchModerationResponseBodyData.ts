// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResult } from "./ImageBatchModerationResponseBodyDataResult";
import { ImageBatchModerationResponseBodyDataResults } from "./ImageBatchModerationResponseBodyDataResults";


export class ImageBatchModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * To detect the data ID corresponding to the object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  manualTaskId?: string;
  /**
   * @remarks
   * The risk labels, confidence scores, and other parameters of image detection results, in an array structure.
   */
  result?: ImageBatchModerationResponseBodyDataResult[];
  /**
   * @remarks
   * The risk labels, confidence scores, and other parameters for each service\\"s image detection, in an array structure.
   */
  results?: ImageBatchModerationResponseBodyDataResults[];
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      manualTaskId: 'ManualTaskId',
      result: 'Result',
      results: 'Results',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResults },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

