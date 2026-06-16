// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventPageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aikqxy3122
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险旁路
   */
  eventName?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * ONLINE
   */
  eventStatus?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      currentPage: 'currentPage',
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventStatus: 'eventStatus',
      pageSize: 'pageSize',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      currentPage: 'number',
      eventCode: 'string',
      eventName: 'string',
      eventStatus: 'string',
      pageSize: 'number',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

