// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatePageListRequest extends $dara.Model {
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * d6_h1fe4cfa1g
   */
  eventCodes?: string;
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
   * Event name
   * 
   * @example
   * 注册事件
   */
  templateName?: string;
  /**
   * @remarks
   * Event template search field
   * 
   * @example
   * age
   */
  templateSearchItem?: string;
  /**
   * @remarks
   * Event status
   * 
   * @example
   * ONLINE
   */
  templateStatus?: string;
  /**
   * @remarks
   * Template type
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

