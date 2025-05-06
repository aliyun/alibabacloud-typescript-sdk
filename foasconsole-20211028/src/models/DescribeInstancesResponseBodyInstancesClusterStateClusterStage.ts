// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight } from "./DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight";


export class DescribeInstancesResponseBodyInstancesClusterStateClusterStage extends $dara.Model {
  clusterId?: string;
  currentStage?: number;
  message?: string;
  status?: string;
  totalStageWithWeight?: DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentStage: 'CurrentStage',
      message: 'Message',
      status: 'Status',
      totalStageWithWeight: 'TotalStageWithWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentStage: 'number',
      message: 'string',
      status: 'string',
      totalStageWithWeight: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight },
    };
  }

  validate() {
    if(Array.isArray(this.totalStageWithWeight)) {
      $dara.Model.validateArray(this.totalStageWithWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

