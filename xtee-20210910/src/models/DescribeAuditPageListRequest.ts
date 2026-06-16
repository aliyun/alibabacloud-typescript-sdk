// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The audit status.
   * 
   * @example
   * SUCCESS
   */
  auditStatus?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_awukck7117
   */
  eventCode?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 手机号MD5命中人脸测试名单
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      auditStatus: 'auditStatus',
      currentPage: 'currentPage',
      eventCode: 'eventCode',
      pageSize: 'pageSize',
      regId: 'regId',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditStatus: 'string',
      currentPage: 'string',
      eventCode: 'string',
      pageSize: 'string',
      regId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

