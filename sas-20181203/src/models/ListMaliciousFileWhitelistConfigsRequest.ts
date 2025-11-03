// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaliciousFileWhitelistConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * *   Set the value to ALL, which indicates all alert types.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  idList?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The feature to which this operation belongs. If you leave this parameter empty, the default value agentless is used.
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

