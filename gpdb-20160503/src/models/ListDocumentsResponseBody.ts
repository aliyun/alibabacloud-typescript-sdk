// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDocumentsResponseBodyItems } from "./ListDocumentsResponseBodyItems";


export class ListDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The queried documents.
   */
  items?: ListDocumentsResponseBodyItems;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      items: 'Items',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      items: ListDocumentsResponseBodyItems,
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

