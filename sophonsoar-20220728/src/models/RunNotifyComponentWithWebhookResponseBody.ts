// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNotifyComponentWithWebhookResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithWebhookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {}
   */
  data?: string;
  /**
   * @remarks
   * The pagination information.
   */
  page?: RunNotifyComponentWithWebhookResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7698CFB-****-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      page: RunNotifyComponentWithWebhookResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

