// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaliciousFileWhitelistConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to return. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The alerting name. Valid values:
   * - ALL: all Alarm Metric values.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * >Notice: This field is deprecated..
   * 
   * @example
   * 123
   * 
   * @deprecated
   */
  idList?: number;
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
   * The maximum number of entries to return per page in a paging query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The business source. This parameter can be left empty. Default value: agentless.
   * 
   * @example
   * agentless
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      eventName: 'EventName',
      idList: 'IdList',
      lang: 'Lang',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      eventName: 'string',
      idList: 'number',
      lang: 'string',
      pageSize: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

