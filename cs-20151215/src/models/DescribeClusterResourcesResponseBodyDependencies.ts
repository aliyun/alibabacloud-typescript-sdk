// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourcesResponseBodyDependencies extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the dependent resource is related.
   * 
   * @example
   * cc5ee03f63e43425cb6f71f1a1756****
   */
  clusterId?: string;
  /**
   * @remarks
   * The dependent resource type.
   * 
   * @example
   * ALIYUN::VPC::NatGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The dependent resource ID.
   * 
   * @example
   * ngw-wz9sphwk42sdtjixo****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      resourceType: 'resource_type',
      instanceId: 'instance_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

