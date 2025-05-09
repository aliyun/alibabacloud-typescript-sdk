// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAbacPoliciesResponseBodyPolicyList } from "./ListAbacPoliciesResponseBodyPolicyList";


export class ListAbacPoliciesResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  policyList?: ListAbacPoliciesResponseBodyPolicyList[];
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      policyList: 'PolicyList',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      policyList: { 'type': 'array', 'itemType': ListAbacPoliciesResponseBodyPolicyList },
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

