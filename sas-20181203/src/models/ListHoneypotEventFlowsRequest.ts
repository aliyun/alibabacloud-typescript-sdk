// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotEventFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The status of the event. Valid values: y, n, and a. The value y indicates handled. The value n indicates unhandled. The value a indicates all.
   * 
   * @example
   * n
   */
  dealed?: string;
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
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20540822-520E-54F5-B7E6-236CF1EC987F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the alert event. The ID of the management account of the ListHoneypotEvents resource directory.
   * 
   * >  You can call the [ListHoneypotEvents](~~ListHoneypotEvents~~) operation to query the IDs of alert events.
   * 
   * @example
   * 7455818
   */
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      lang: 'Lang',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      lang: 'string',
      pageSize: 'number',
      requestId: 'string',
      securityEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

