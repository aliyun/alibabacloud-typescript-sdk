// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTrademarkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 申请人名称
   * 
   * @example
   * 示例值示例值
   */
  trademarkApplicantName?: string;
  /**
   * @remarks
   * 专用权生失效日期
   * 
   * @example
   * 2025-11-01~2025-12-19
   */
  trademarkEffExpDate?: string;
  /**
   * @remarks
   * 商标材料id
   * 
   * @example
   * 10000*******
   */
  trademarkId?: number;
  /**
   * @remarks
   * 商标名称
   * 
   * @example
   * 示例值示例值
   */
  trademarkName?: string;
  /**
   * @remarks
   * 商标截图Osskey（给签名传工单用）
   * 
   * @example
   * 100000*****802/afdebd46-****-46e4-899d-b4375826c898_mhk9oz0p_1762****31542.png
   */
  trademarkPic?: string;
  /**
   * @remarks
   * 商标截图url地址
   * 
   * @example
   * https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com/100000****50802/afde****-496d-46e4-899d-b43758****8_mhk9oz0p_176224****542.png?Expires=1762****6&OSSAccessKeyId=bypFN****73PsLI&Signature=BygI9X****h7%2FXmFIo****FB2c%3D
   */
  trademarkPicUrl?: string;
  /**
   * @remarks
   * 商标注册号
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
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QuerySmsTrademarkResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 569E9DBD-23FF-1785-99AD-E4B23608C104
   */
  requestId?: string;
  /**
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

