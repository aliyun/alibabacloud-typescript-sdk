// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSDGDeploymentStatusResponseBodyDeploymentStatus } from "./DescribeSdgdeploymentStatusResponseBodyDeploymentStatus";


export class DescribeSDGDeploymentStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SDG deployment information.
   */
  deploymentStatus?: DescribeSDGDeploymentStatusResponseBodyDeploymentStatus[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1
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
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68B85217-03B8-5141-9216-EA4D7C496B9A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried deployment records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
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
      deploymentStatus: { 'type': 'array', 'itemType': DescribeSDGDeploymentStatusResponseBodyDeploymentStatus },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

