// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationGroupBillResponseBodyApplicationGroupConsume } from "./DescribeApplicationGroupBillResponseBodyApplicationGroupConsume";


export class DescribeApplicationGroupBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The consume of application group.
   */
  applicationGroupConsume?: DescribeApplicationGroupBillResponseBodyApplicationGroupConsume[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E897A1AB-4701-5B71-93AD-38FD703763A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroupConsume: 'ApplicationGroupConsume',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroupConsume: { 'type': 'array', 'itemType': DescribeApplicationGroupBillResponseBodyApplicationGroupConsume },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationGroupConsume)) {
      $dara.Model.validateArray(this.applicationGroupConsume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

