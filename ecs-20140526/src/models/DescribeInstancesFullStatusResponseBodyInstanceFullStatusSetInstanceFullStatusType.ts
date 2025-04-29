// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus";
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet";
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus";


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType extends $dara.Model {
  /**
   * @remarks
   * The health state of the instance.
   */
  healthStatus?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus;
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
   * The system events that are in the Scheduled or Inquiring state.
   */
  scheduledSystemEventSet?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet;
  /**
   * @remarks
   * The lifecycle state of the instance.
   */
  status?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus;
  static names(): { [key: string]: string } {
    return {
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      scheduledSystemEventSet: 'ScheduledSystemEventSet',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthStatus: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus,
      instanceId: 'string',
      scheduledSystemEventSet: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet,
      status: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus,
    };
  }

  validate() {
    if(this.healthStatus && typeof (this.healthStatus as any).validate === 'function') {
      (this.healthStatus as any).validate();
    }
    if(this.scheduledSystemEventSet && typeof (this.scheduledSystemEventSet as any).validate === 'function') {
      (this.scheduledSystemEventSet as any).validate();
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

