// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCardSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 卡片短信发送ID。
   * 
   * @example
   * 123
   */
  bizCardId?: string;
  /**
   * @remarks
   * 数字短信发送ID。
   * 
   * @example
   * 232
   */
  bizDigitalId?: string;
  /**
   * @remarks
   * 文本短信发送ID。
   * 
   * @example
   * 524
   */
  bizSmsId?: string;
  /**
   * @remarks
   * 卡片短信模板审核状态。取值：
   * - **0**：审核中。
   * - **1**：审核通过。
   * - **2**：审核不通过。
   * >  审核不通过的短信可通过**FallbackType**字段设置回落流程。
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * 接收卡片短信的手机号。
   * 
   * @example
   * 1390000****
   */
  mediaMobiles?: string;
  /**
   * @remarks
   * 回落的手机号。
   * 
   * @example
   * 1390000****
   */
  notMediaMobiles?: string;
  static names(): { [key: string]: string } {
    return {
      bizCardId: 'BizCardId',
      bizDigitalId: 'BizDigitalId',
      bizSmsId: 'BizSmsId',
      cardTmpState: 'CardTmpState',
      mediaMobiles: 'MediaMobiles',
      notMediaMobiles: 'NotMediaMobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCardId: 'string',
      bizDigitalId: 'string',
      bizSmsId: 'string',
      cardTmpState: 'number',
      mediaMobiles: 'string',
      notMediaMobiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCardSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求状态码。
   * * 返回OK代表请求成功。
   * * 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据。
   */
  data?: SendCardSmsResponseBodyData;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D28D0
   */
  requestId?: string;
  /**
   * @remarks
   * 调用接口是否成功。取值：
   * 
   * - **true**：调用成功。
   * 
   * - **false**：调用失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendCardSmsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

