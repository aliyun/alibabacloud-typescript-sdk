// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditPageListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Audit status
   * 
   * @example
   * SUCCESS
   */
  auditStatus?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_awukck7117
   */
  eventCode?: string;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Policy name
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

