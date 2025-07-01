// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLifecyclePoliciesResponseBodyLifecyclePolicies } from "./DescribeLifecyclePoliciesResponseBodyLifecyclePolicies";


export class DescribeLifecyclePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried lifecycle policies.
   */
  lifecyclePolicies?: DescribeLifecyclePoliciesResponseBodyLifecyclePolicies[];
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
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of lifecycle policies.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecyclePolicies: 'LifecyclePolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecyclePolicies: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePolicies },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecyclePolicies)) {
      $dara.Model.validateArray(this.lifecyclePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

