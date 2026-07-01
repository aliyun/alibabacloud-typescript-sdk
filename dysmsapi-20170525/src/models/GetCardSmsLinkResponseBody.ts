// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardSmsLinkResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 支持卡片短信的手机号码。
   * 
   * @example
   * [\\"1390000****\\",\\"1370000****\\"]
   */
  cardPhoneNumbers?: string;
  /**
   * @remarks
   * 用于申请卡片短信短链的短信签名，在发送时签名、接收号码、卡片短信短链要一一对应。
   * 
   * @example
   * ["阿里云","阿里云2"]
   */
  cardSignNames?: string;
  /**
   * @remarks
   * 卡片短信短链。
   * 
   * @example
   * [\\"mw2m.cn/LAaGGa\\",\\"mw2m.cn/LAAaes\\"]
   */
  cardSmsLinks?: string;
  /**
   * @remarks
   * 卡片短信模板审核状态。取值：
   * - **0**：审核中。
   * - **1**：审核通过。
   * - **2**：审核不通过。
   * 
   * > 未审核通过的短信走回落流程。
   * 
   * @example
   * 0
   */
  cardTmpState?: number;
  /**
   * @remarks
   * 不支持卡片短信的手机号。
   * 
   * @example
   * 1390000****
   */
  notMediaMobiles?: string;
  static names(): { [key: string]: string } {
    return {
      cardPhoneNumbers: 'CardPhoneNumbers',
      cardSignNames: 'CardSignNames',
      cardSmsLinks: 'CardSmsLinks',
      cardTmpState: 'CardTmpState',
      notMediaMobiles: 'NotMediaMobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardPhoneNumbers: 'string',
      cardSignNames: 'string',
      cardSmsLinks: 'string',
      cardTmpState: 'number',
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

export class GetCardSmsLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求状态码。取值：
   * - OK：代表请求成功。
   * - 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据。
   */
  data?: GetCardSmsLinkResponseBodyData;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * CC89A90C-978F-46AC-B80D-54738371E7CA
   */
  requestId?: string;
  /**
   * @remarks
   * 接口调用是否成功。取值：
   * 
   * - **true**：调用成功。
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
      data: GetCardSmsLinkResponseBodyData,
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

