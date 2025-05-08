// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsAssociatedInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-01-05T07:09:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-51p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance that is associated with the HAVIP. Valid values:
   * 
   * *   EnsInstance: ENS instance
   * *   NetworkInterface: elastic network interface (ENI)
   * 
   * @example
   * EnsInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The private IP address of the instance that is associated with the HAVIP. Valid values:
   * 
   * @example
   * 192.XX.XX.9
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association status of the HAVIP. Valid values:
   * 
   * *   Associating
   * *   InUse
   * *   Unassociating
   * 
   * @example
   * InUse
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

