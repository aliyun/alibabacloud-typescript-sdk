// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOrgsResponseBodyOrgs } from "./DescribeOrgsResponseBodyOrgs";


export class DescribeOrgsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the DescribeOrgs operation was called.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The organizations.
   */
  orgs?: DescribeOrgsResponseBodyOrgs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B4BB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      orgs: 'Orgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      orgs: { 'type': 'array', 'itemType': DescribeOrgsResponseBodyOrgs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

