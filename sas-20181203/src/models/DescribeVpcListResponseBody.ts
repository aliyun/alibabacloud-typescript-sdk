// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcListResponseBodyVpcList extends $dara.Model {
  /**
   * @remarks
   * The number of Elastic Compute Service (ECS) instances.
   * 
   * @example
   * 9
   */
  ecsCount?: number;
  /**
   * @remarks
   * The information about the virtual private cloud (VPC).
   * 
   * @example
   * TestVpcNote
   */
  instanceDesc?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * ins_1321_asedb_ada
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      instanceDesc: 'InstanceDesc',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      instanceDesc: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of VPCs.
   */
  vpcList?: DescribeVpcListResponseBodyVpcList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      vpcList: { 'type': 'array', 'itemType': DescribeVpcListResponseBodyVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

