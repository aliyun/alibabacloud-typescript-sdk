// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlansResponseBodyRecoveryPlans } from "./DescribeGtmRecoveryPlansResponseBodyRecoveryPlans";


export class DescribeGtmRecoveryPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The details about the queried disaster recovery plans.
   */
  recoveryPlans?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2BA072CF-CA21-4A34-B6C2-227BE2C58079
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlans: 'RecoveryPlans',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlans: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.recoveryPlans && typeof (this.recoveryPlans as any).validate === 'function') {
      (this.recoveryPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

