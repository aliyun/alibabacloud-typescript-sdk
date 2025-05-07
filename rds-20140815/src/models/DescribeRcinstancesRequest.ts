// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesRequest extends $dara.Model {
  hostIp?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze704f*****
   */
  instanceId?: string;
  instanceIds?: string;
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
  publicIp?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  status?: string;
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
      hostIp: 'HostIp',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
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
      hostIp: 'string',
      instanceId: 'string',
      instanceIds: 'string',
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

