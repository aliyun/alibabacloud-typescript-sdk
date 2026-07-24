// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnswerSampleByPageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * 答案
   */
  answer?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-07-31 06:16:06
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1666
   */
  id?: number;
  /**
   * @remarks
   * The ID of the proxy answer library.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 104813*****2399
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      libId: 'LibId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      gmtCreate: 'string',
      id: 'number',
      libId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAnswerSampleByPageResponseBody extends $dara.Model {
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
   * The data on the current page.
   */
  items?: QueryAnswerSampleByPageResponseBodyItems[];
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
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': QueryAnswerSampleByPageResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

