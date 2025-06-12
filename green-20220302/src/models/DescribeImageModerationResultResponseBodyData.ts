// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageModerationResultResponseBodyDataResult } from "./DescribeImageModerationResultResponseBodyDataResult";


export class DescribeImageModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId that is specified in the API request. If this parameter is not specified in the API request, this field is not available in the response.
   * 
   * @example
   * 2a5389eb-4ff8-4584-ac99-644e2a539aa1
   */
  dataId?: string;
  /**
   * @remarks
   * The information about the captured frames.
   * 
   * @example
   * [{"result":[{"confidence":81.22,"label":"violent_explosion"}]}]
   */
  frame?: string;
  /**
   * @remarks
   * The number of frames.
   * 
   * @example
   * 1
   */
  frameNum?: number;
  manualTaskId?: string;
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: DescribeImageModerationResultResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      frame: 'Frame',
      frameNum: 'FrameNum',
      manualTaskId: 'ManualTaskId',
      reqId: 'ReqId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      frame: 'string',
      frameNum: 'number',
      manualTaskId: 'string',
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeImageModerationResultResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

