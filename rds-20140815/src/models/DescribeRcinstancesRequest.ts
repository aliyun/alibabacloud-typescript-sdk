// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesRequest extends $dara.Model {
  clusterId?: string;
  description?: string;
  descriptionForFuzzy?: string;
  /**
   * @remarks
   * Queries instances by host IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostIp?: string;
  imageId?: string;
  /**
   * @remarks
   * The instance ID. This parameter is used to query a single instance.
   * 
   * > If no instance ID is specified (neither **InstanceId** nor **InstanceIds** is passed), the operation returns detailed information about all RDS Custom instances in the specified region.
   * 
   * @example
   * rc-i2p26bde8bckf141****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is used to query multiple instances at a time. Separate multiple instance IDs with commas (,). A maximum of 100 IDs are supported. Input format: `["InstanceID1","InstanceID2"]`.
   * 
   * > If both **InstanceIds** and **InstanceId** are specified, the value of **InstanceIds** takes precedence.
   * 
   * @example
   * ["rc-i2p26bde8bckf141****","rc-l1753m982otq2s2m****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * k8s-node
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the instance status list.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Queries instances by public IP address.
   * 
   * @example
   * 121.89.XX.XX
   */
  publicIp?: string;
  /**
   * @remarks
   * The region ID. This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **Pending**: Being created.
   * - **Running**: Running.
   * - **Starting**: Being started.
   * - **Stopping**: Being stopped.
   * - **Stopped**: Stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Queries instances by the specified tag. Input format: `{"TagKey":"TagValue"}`.
   * 
   * @example
   * {"testRC":"test01"}
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      descriptionForFuzzy: 'DescriptionForFuzzy',
      hostIp: 'HostIp',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      status: 'Status',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      descriptionForFuzzy: 'string',
      hostIp: 'string',
      imageId: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publicIp: 'string',
      regionId: 'string',
      status: 'string',
      tag: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

