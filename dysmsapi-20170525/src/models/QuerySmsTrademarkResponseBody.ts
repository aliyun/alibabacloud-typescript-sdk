// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTrademarkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The applicant name.
   * 
   * @example
   * 阿里云
   */
  trademarkApplicantName?: string;
  /**
   * @remarks
   * The validity period of the trademark.
   * 
   * @example
   * 2025-11-01~2025-12-19
   */
  trademarkEffExpDate?: string;
  /**
   * @remarks
   * The trademark ID.
   * 
   * @example
   * 10000*******
   */
  trademarkId?: number;
  /**
   * @remarks
   * The name of the trademark.
   * 
   * @example
   * 示例商标
   */
  trademarkName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) file key for the trademark image.
   * 
   * @example
   * 100000*****802/afdebd46-****-46e4-899d-b4375826c898_mhk9oz0p_1762****31542.png
   */
  trademarkPic?: string;
  /**
   * @remarks
   * The URL of the trademark screenshot.
   * 
   * @example
   * https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com/100000****50802/afde****-496d-46e4-899d-b43758****8_mhk9oz0p_176224****542.png?Expires=1762****6&OSSAccessKeyId=bypFN****73PsLI&Signature=BygI9X****h7%2FXmFIo****FB2c%3D
   */
  trademarkPicUrl?: string;
  /**
   * @remarks
   * The trademark registration number.
   * 
   * @example
   * 1234
   */
  trademarkRegistrationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      trademarkApplicantName: 'TrademarkApplicantName',
      trademarkEffExpDate: 'TrademarkEffExpDate',
      trademarkId: 'TrademarkId',
      trademarkName: 'TrademarkName',
      trademarkPic: 'TrademarkPic',
      trademarkPicUrl: 'TrademarkPicUrl',
      trademarkRegistrationNumber: 'TrademarkRegistrationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trademarkApplicantName: 'string',
      trademarkEffExpDate: 'string',
      trademarkId: 'number',
      trademarkName: 'string',
      trademarkPic: 'string',
      trademarkPicUrl: 'string',
      trademarkRegistrationNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsTrademarkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list of trademark details.
   */
  data?: QuerySmsTrademarkResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 569E9DBD-23FF-1785-99AD-E4B23608C104
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * 
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': QuerySmsTrademarkResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

