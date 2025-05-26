// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups } from "./DescribeDbresourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups";


export class DescribeDBResourceGroupResponseBodyGroupsInfoRayConfig extends $dara.Model {
  category?: string;
  headSpec?: string;
  rayClusterAddress?: string;
  rayDashboardAddress?: string;
  rayGrafanaAddress?: string;
  workerGroups?: DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      headSpec: 'HeadSpec',
      rayClusterAddress: 'RayClusterAddress',
      rayDashboardAddress: 'RayDashboardAddress',
      rayGrafanaAddress: 'RayGrafanaAddress',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      headSpec: 'string',
      rayClusterAddress: 'string',
      rayDashboardAddress: 'string',
      rayGrafanaAddress: 'string',
      workerGroups: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRayConfigWorkerGroups },
    };
  }

  validate() {
    if(Array.isArray(this.workerGroups)) {
      $dara.Model.validateArray(this.workerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

