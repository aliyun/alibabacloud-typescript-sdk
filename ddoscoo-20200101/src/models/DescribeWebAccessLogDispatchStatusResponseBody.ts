// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus } from "./DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus";


export class DescribeWebAccessLogDispatchStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the log analysis feature is enabled for domain names.
   */
  slsConfigStatus?: DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus[];
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
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': DescribeWebAccessLogDispatchStatusResponseBodySlsConfigStatus },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slsConfigStatus)) {
      $dara.Model.validateArray(this.slsConfigStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

