// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score. The value ranges from 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * The label returned after the image content is moderated.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccountId specified in the request.
   * 
   * @example
   * 123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The value of the \\`dataId\\` parameter specified in the API request. This field is not returned if \\`dataId\\` was not specified.
   * 
   * @example
   * 2a5389eb-4ff8-4584-ac99-644e2a539aa1
   */
  dataId?: string;
  /**
   * @remarks
   * Information about the image frames.
   * 
   * @example
   * [{"result":[{"confidence":81.22,"label":"violent_explosion"}]}]
   */
  frame?: string;
  /**
   * @remarks
   * The number of result frames.
   * 
   * @example
   * 1
   */
  frameNum?: number;
  /**
   * @remarks
   * The ID of the manual review task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  /**
   * @remarks
   * The \\`ReqId\\` returned by the asynchronous Image Moderation Pro API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The results of the image moderation, including risk labels and confidence scores.
   */
  result?: DescribeImageModerationResultResponseBodyDataResult[];
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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
      accountId: 'string',
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

export class DescribeImageModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This is the same as the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The results of the image content moderation.
   */
  data?: DescribeImageModerationResultResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The unique ID of the request. Alibaba Cloud generates this ID for each request. Use this ID to troubleshoot and locate issues.
   * 
   * @example
   * 2881AD4F-638B-52A3-BA20-F74C5B1CEAE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageModerationResultResponseBodyData,
      msg: 'string',
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

