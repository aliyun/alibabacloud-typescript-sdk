// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks";


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute extends $dara.Model {
  /**
   * @remarks
   * The device name of the local disk.
   * 
   * @example
   * /dev/vdb
   */
  device?: string;
  /**
   * @remarks
   * The ID of the local disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The inactive disks that have been released and must be cleared.
   */
  inactiveDisks?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskId: 'DiskId',
      inactiveDisks: 'InactiveDisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskId: 'string',
      inactiveDisks: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks,
    };
  }

  validate() {
    if(this.inactiveDisks && typeof (this.inactiveDisks as any).validate === 'function') {
      (this.inactiveDisks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

