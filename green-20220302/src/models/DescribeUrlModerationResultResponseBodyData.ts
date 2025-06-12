// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUrlModerationResultResponseBodyDataExtraInfo } from "./DescribeUrlModerationResultResponseBodyDataExtraInfo";
import { DescribeUrlModerationResultResponseBodyDataResult } from "./DescribeUrlModerationResultResponseBodyDataResult";


export class DescribeUrlModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId that is specified in the API request. If this parameter is not specified in the API request, this field is not available in the response.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The supplementary information.
   */
  extraInfo?: DescribeUrlModerationResultResponseBodyDataExtraInfo;
  /**
   * @remarks
   * The ReqId field returned by an asynchronous URL moderation operation.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: DescribeUrlModerationResultResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      extraInfo: 'ExtraInfo',
      reqId: 'ReqId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      extraInfo: DescribeUrlModerationResultResponseBodyDataExtraInfo,
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeUrlModerationResultResponseBodyDataResult },
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
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

