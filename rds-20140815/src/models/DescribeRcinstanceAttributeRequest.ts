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
   * The instance name
   * 
   * @example
   * k8s-node
   */
  instanceName?: string;
  /**
   * @remarks
   * Set the upper limit for the number of instance disks in the return result. The valid range is 10 to 500.  
   * - If no value is set, the default value is 20.  
   * - If the set value is less than 10, it is fixed to 10.  
   * - If the set value is greater than or equal to 10 and less than or equal to 500, the set value is used.
   * 
   * @example
   * 20
   */
  maxDisksResults?: number;
  /**
   * @remarks
   * The VPC network IP address of the instance, that is, the private IP address.
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

