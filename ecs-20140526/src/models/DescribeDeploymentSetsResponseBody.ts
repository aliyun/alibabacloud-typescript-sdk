// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeploymentSetsResponseBodyDeploymentSets } from "./DescribeDeploymentSetsResponseBodyDeploymentSets";


export class DescribeDeploymentSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the deployment sets.
   */
  deploymentSets?: DescribeDeploymentSetsResponseBodyDeploymentSets;
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried deployment sets.
   * 
   * @example
   * 1
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
      deploymentSets: DescribeDeploymentSetsResponseBodyDeploymentSets,
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

