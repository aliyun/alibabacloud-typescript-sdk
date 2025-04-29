// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes } from "./DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes";


export class DescribeInstanceAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The renewal attributes of instances.
   */
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried instances.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttributes: 'InstanceRenewAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceRenewAttributes && typeof (this.instanceRenewAttributes as any).validate === 'function') {
      (this.instanceRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

