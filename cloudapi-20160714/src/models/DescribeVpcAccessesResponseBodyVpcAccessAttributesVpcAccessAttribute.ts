// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags } from "./DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags";


export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute extends $dara.Model {
  /**
   * @remarks
   * The time when the authorization was created.
   * 
   * @example
   * 2017-01-30T04:10:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the VPC access authorization.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of an Elastic Compute Service (ECS) or Server Load Balancer (SLB) instance in the VPC.
   * 
   * @example
   * i-uf6bzcg1pr4oh5jjmxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the authorization.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * @example
   * 80
   */
  port?: number;
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
   * The tags.
   */
  tags?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags;
  /**
   * @remarks
   * The ID of the VPC access authorization.
   * 
   * @example
   * vpc-*****ssds24
   */
  vpcAccessId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf657qec7lx42paw3qxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The host of the backend service.
   * 
   * @example
   * hos-a***.fh-**nc.com
   */
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      regionId: 'RegionId',
      tags: 'Tags',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      port: 'number',
      regionId: 'string',
      tags: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags,
      vpcAccessId: 'string',
      vpcId: 'string',
      vpcTargetHostName: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

