// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsProgressResponseBodyApsHiveProgress } from "./DescribeApsProgressResponseBodyApsHiveProgress";


export class DescribeApsProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration progress.
   * 
   * @example
   * -
   */
  apsHiveProgress?: DescribeApsProgressResponseBodyApsHiveProgress[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-******-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * The success rate.
   * 
   * @example
   * 100
   */
  successPercentage?: number;
  /**
   * @remarks
   * The total number of migrated tables returned.
   * 
   * @example
   * 10
   */
  successTableCount?: number;
  /**
   * @remarks
   * The total number of tables to be migrated.
   * 
   * @example
   * 10
   */
  totalTableCount?: number;
  static names(): { [key: string]: string } {
    return {
      apsHiveProgress: 'ApsHiveProgress',
      requestId: 'RequestId',
      successPercentage: 'SuccessPercentage',
      successTableCount: 'SuccessTableCount',
      totalTableCount: 'TotalTableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsHiveProgress: { 'type': 'array', 'itemType': DescribeApsProgressResponseBodyApsHiveProgress },
      requestId: 'string',
      successPercentage: 'number',
      successTableCount: 'number',
      totalTableCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apsHiveProgress)) {
      $dara.Model.validateArray(this.apsHiveProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

