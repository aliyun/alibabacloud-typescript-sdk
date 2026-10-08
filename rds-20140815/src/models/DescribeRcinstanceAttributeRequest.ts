// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
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
   * The maximum number of disks returned in the response. Valid values: 10 to 500.
   * - If this parameter is not specified, the default value is 20.
   * - If the specified value is less than 10, the value is set to 10.
   * - If the specified value is from 10 to 500, the specified value is used.
   * 
   * @example
   * 20
   */
  maxDisksResults?: number;
  /**
   * @remarks
   * The private IP address of the instance in the VPC.
   * 
   * @example
   * 192.168.XXX.XXX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxDisksResults: 'MaxDisksResults',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      maxDisksResults: 'number',
      privateIpAddress: 'string',
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

