// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlModerationResultResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The ICP number.
   * 
   * @example
   * xx
   */
  icpNo?: string;
  /**
   * @remarks
   * The type of the ICP filing.
   * 
   * @example
   * xx
   */
  icpType?: string;
  /**
   * @remarks
   * The type of site
   * 
   * @example
   * game
   */
  siteType?: string;
  static names(): { [key: string]: string } {
    return {
      icpNo: 'IcpNo',
      icpType: 'IcpType',
      siteType: 'SiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNo: 'string',
      icpType: 'string',
      siteType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The labels returned after the asynchronous URL moderation.
   * 
   * @example
   * sexual_url
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeUrlModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUrlModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01F9144A-2088-5D87-935B-2DB865284B1A
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
      data: DescribeUrlModerationResultResponseBodyData,
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

