// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * Query by instance host IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostIp?: string;
  imageId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-i2p26bde8bckf141****
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is used to query multiple instances simultaneously. Separate instance IDs with English commas (,), and up to 100 IDs are supported. The input format is: `["instance ID 1","instance ID 2"]`.
   * 
   * > When both **InstanceIds** and **instanceId** are provided, the value of **InstanceIds** takes precedence.
   * 
   * @example
   * ["rc-i2p26bde8bckf141****","rc-l1753m982otq2s2m****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * Instance Name
   * 
   * @example
   * k8s-node
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Page starts from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query by instance public IP address.
   * 
   * @example
   * 121.89.XX.XX
   */
  publicIp?: string;
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
   * Instance status. Valid values:  
   * 
   * - **Pending**: Creation in progress.  
   * - **Running**: Running.  
   * - **Starting**: Starting.  
   * - **Stopping**: Pausing.  
   * - **Stopped**: Paused.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Query by specified tag. The input format is: `{"TagKey":"TagValue"}`.
   * 
   * @example
   * {"testRC":"test01"}
   */
  tag?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
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
      description: 'string',
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

