// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatePageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * d6_h1fe4cfa1g
   */
  eventCodes?: string;
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
   * The event name.
   * 
   * @example
   * 注册事件
   */
  templateName?: string;
  /**
   * @remarks
   * The search field for event templates.
   * 
   * @example
   * age
   */
  templateSearchItem?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * ONLINE
   */
  templateStatus?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * @example
   * PUB_SERVICE
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      eventCodes: 'eventCodes',
      pageSize: 'pageSize',
      regId: 'regId',
      templateName: 'templateName',
      templateSearchItem: 'templateSearchItem',
      templateStatus: 'templateStatus',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      eventCodes: 'string',
      pageSize: 'string',
      regId: 'string',
      templateName: 'string',
      templateSearchItem: 'string',
      templateStatus: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

