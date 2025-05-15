// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPoliciesResponseBodyPolicies } from "./ListPoliciesResponseBodyPolicies";


export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 分页大小。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Next Token
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Permission policy list
   */
  policies?: ListPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

