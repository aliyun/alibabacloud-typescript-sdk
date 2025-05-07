// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCDeploymentSetsResponseBodyDeploymentSets } from "./DescribeRcdeploymentSetsResponseBodyDeploymentSets";


export class DescribeRCDeploymentSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the deployment set.
   */
  deploymentSets?: DescribeRCDeploymentSetsResponseBodyDeploymentSets;
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39265F46-EC77-4036-8AC4-F035F32F6BE2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentSets: 'DeploymentSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSets: DescribeRCDeploymentSetsResponseBodyDeploymentSets,
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.deploymentSets && typeof (this.deploymentSets as any).validate === 'function') {
      (this.deploymentSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

