// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotEventFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the event has been handled. Valid values:
   * - **y**: Handled. 
   * - **n**: Unhandled. 
   * - **a**: All.
   * 
   * @example
   * n
   */
  dealed?: string;
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
   * The maximum number of entries to return per page in a paged query. Default value: 100. If the PageSize parameter is left empty, 100 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Invalid parameter.
   * 
   * @example
   * 9F4E6157-9600-5588-86B9-38F09067****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the alert event.
   * >You can call the [ListHoneypotEvents](~~ListHoneypotEvents~~) operation to obtain this parameter.
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

