// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesClusterStateClusterStage } from "./DescribeInstancesResponseBodyInstancesClusterStateClusterStage";
import { DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto } from "./DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto";


export class DescribeInstancesResponseBodyInstancesClusterState extends $dara.Model {
  clusterId?: string;
  clusterStage?: DescribeInstancesResponseBodyInstancesClusterStateClusterStage;
  createTimeout?: boolean;
  status?: string;
  subStatus?: string;
  url?: string;
  userSlbDto?: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto;
  vpcCidr?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterStage: 'ClusterStage',
      createTimeout: 'CreateTimeout',
      status: 'Status',
      subStatus: 'SubStatus',
      url: 'Url',
      userSlbDto: 'UserSlbDto',
      vpcCidr: 'VpcCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStage: DescribeInstancesResponseBodyInstancesClusterStateClusterStage,
      createTimeout: 'boolean',
      status: 'string',
      subStatus: 'string',
      url: 'string',
      userSlbDto: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto,
      vpcCidr: 'string',
    };
  }

  validate() {
    if(this.clusterStage && typeof (this.clusterStage as any).validate === 'function') {
      (this.clusterStage as any).validate();
    }
    if(this.userSlbDto && typeof (this.userSlbDto as any).validate === 'function') {
      (this.userSlbDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

