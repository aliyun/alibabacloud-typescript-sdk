// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet";
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus";
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus";


export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType extends $dara.Model {
  /**
   * @remarks
   * The name of the EBS device that is attached to an instance. Example: /dev/xvdb.
   * 
   * This parameter has a value only when the value of `Status` is `In_use`.
   * 
   * > This parameter will be deprecated in the future. To ensure future compatibility, we recommend that you do not use this parameter.
   * 
   * @example
   * null
   */
  device?: string;
  /**
   * @remarks
   * The events about the EBS device.
   */
  diskEventSet?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet;
  /**
   * @remarks
   * The EBS device ID.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The health status of the EBS device.
   */
  healthStatus?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The lifecycle status of the EBS device.
   */
  status?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskEventSet: 'DiskEventSet',
      diskId: 'DiskId',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskEventSet: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet,
      diskId: 'string',
      healthStatus: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus,
      instanceId: 'string',
      status: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus,
    };
  }

  validate() {
    if(this.diskEventSet && typeof (this.diskEventSet as any).validate === 'function') {
      (this.diskEventSet as any).validate();
    }
    if(this.healthStatus && typeof (this.healthStatus as any).validate === 'function') {
      (this.healthStatus as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

