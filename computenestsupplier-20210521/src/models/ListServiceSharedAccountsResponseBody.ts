// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceSharedAccountsResponseBodyShareAccount } from "./ListServiceSharedAccountsResponseBodyShareAccount";


export class ListServiceSharedAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA3AE512-6D30-549A-B52D-B9042CA8D515
   */
  requestId?: string;
  /**
   * @remarks
   * Service shared account information.
   */
  shareAccount?: ListServiceSharedAccountsResponseBodyShareAccount[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      shareAccount: 'ShareAccount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      shareAccount: { 'type': 'array', 'itemType': ListServiceSharedAccountsResponseBodyShareAccount },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shareAccount)) {
      $dara.Model.validateArray(this.shareAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

