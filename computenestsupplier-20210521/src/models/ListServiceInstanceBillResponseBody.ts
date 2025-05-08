// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstanceBillResponseBodyItem } from "./ListServiceInstanceBillResponseBodyItem";


export class ListServiceInstanceBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing information of the backup schedule.
   */
  item?: ListServiceInstanceBillResponseBodyItem[];
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B68C6D1-0C22-53F7-997C-F95D109C31AA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 65
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListServiceInstanceBillResponseBodyItem },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

