// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSDGStatusResponseBodyDeploymentStatus } from "./DescribeInstanceSdgstatusResponseBodyDeploymentStatus";


export class DescribeInstanceSDGStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deployment information of the SDGs.
   */
  deploymentStatus?: DescribeInstanceSDGStatusResponseBodyDeploymentStatus[];
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried deployment records.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentStatus: 'DeploymentStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentStatus: { 'type': 'array', 'itemType': DescribeInstanceSDGStatusResponseBodyDeploymentStatus },
      pageNumber: 'number',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentStatus)) {
      $dara.Model.validateArray(this.deploymentStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

