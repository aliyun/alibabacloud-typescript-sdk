// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The RDS Custom container cluster ID used to filter instances.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * The description used to filter instances.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * The keyword used to perform a fuzzy match on the instance description.
   * 
   * @example
   * Instance
   */
  descriptionForFuzzy?: string;
  /**
   * @remarks
   * The host IP address used to filter instances.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The image ID used to filter instances.
   * 
   * @example
   * image-dsvjzw2ii8n4******
   */
  imageId?: string;
  /**
   * @remarks
   * The instance ID. This parameter is used to query a single instance.
   * 
   * > If no instance ID is specified (neither **InstanceId** nor **InstanceIds** is specified), the details of all RDS Custom instances in the specified region are returned.
   * 
   * @example
   * rc-i2p26bde8bckf141****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is used to query multiple instances at a time. Separate multiple instance IDs with commas (,). You can specify up to 100 instance IDs. Input format: `["InstanceId1","InstanceId2"]`.
   * 
   * > If both **InstanceIds** and **InstanceId** are specified, the value of **InstanceIds** prevails.
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
   * Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The public IP address used to filter instances.
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
   * - **Pending**: The instance is being created.
   * - **Running**: The instance is running.
   * - **Starting**: The instance is starting.
   * - **Stopping**: The instance is being stopped.
   * - **Stopped**: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags used to filter instances. Input format: `{"TagKey":"TagValue"}`.
   * 
   * @example
   * {"testRC":"test01"}
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the VPC.
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

