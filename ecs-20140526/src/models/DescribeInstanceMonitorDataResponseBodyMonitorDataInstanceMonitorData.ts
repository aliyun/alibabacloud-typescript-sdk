// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData extends $dara.Model {
  /**
   * @remarks
   * The read bandwidth of the cloud disks (system disk and data disks). Unit: Byte/s.
   * 
   * @example
   * 1000
   */
  BPSRead?: number;
  /**
   * @remarks
   * The write bandwidth of the cloud disks (system disk and data disks). Unit: Byte/s.
   * 
   * @example
   * 13585
   */
  BPSWrite?: number;
  /**
   * @remarks
   * The vCPU utilization of the instance. Unit: percent (%).
   * 
   * @example
   * 2
   */
  CPU?: number;
  /**
   * @remarks
   * The overdrawn CPU credits of the burstable instance.
   * 
   * @example
   * 0.4
   */
  CPUAdvanceCreditBalance?: number;
  /**
   * @remarks
   * The total number of CPU credits of the burstable instance.
   * 
   * @example
   * 120
   */
  CPUCreditBalance?: number;
  /**
   * @remarks
   * The number of CPU credits consumed by the burstable instance.
   * 
   * @example
   * 30
   */
  CPUCreditUsage?: number;
  /**
   * @remarks
   * The unpaid overdrawn CPU credits.
   * 
   * @example
   * 0.5
   */
  CPUNotpaidSurplusCreditUsage?: number;
  /**
   * @remarks
   * The number of read I/O operations per second on the cloud disks (system disk and data disks).
   * 
   * @example
   * 1000
   */
  IOPSRead?: number;
  /**
   * @remarks
   * The number of write I/O operations per second on the cloud disks (system disk and data disks).
   * 
   * @example
   * 200
   */
  IOPSWrite?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1a36962lrhj4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public bandwidth of the instance. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  internetBandwidth?: number;
  /**
   * @remarks
   * The Internet traffic received by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.
   * 
   * @example
   * 122
   */
  internetRX?: number;
  /**
   * @remarks
   * The Internet traffic sent by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.
   * 
   * @example
   * 343
   */
  internetTX?: number;
  /**
   * @remarks
   * The internal bandwidth of the instance. Unit: Kbit/s.
   * 
   * @example
   * 10
   */
  intranetBandwidth?: number;
  /**
   * @remarks
   * The internal data traffic received by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.
   * 
   * @example
   * 122
   */
  intranetRX?: number;
  /**
   * @remarks
   * The internal data traffic sent by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.
   * 
   * @example
   * 343
   */
  intranetTX?: number;
  /**
   * @remarks
   * The timestamp of the monitoring data.
   * 
   * @example
   * 2014-10-30T05:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      BPSRead: 'BPSRead',
      BPSWrite: 'BPSWrite',
      CPU: 'CPU',
      CPUAdvanceCreditBalance: 'CPUAdvanceCreditBalance',
      CPUCreditBalance: 'CPUCreditBalance',
      CPUCreditUsage: 'CPUCreditUsage',
      CPUNotpaidSurplusCreditUsage: 'CPUNotpaidSurplusCreditUsage',
      IOPSRead: 'IOPSRead',
      IOPSWrite: 'IOPSWrite',
      instanceId: 'InstanceId',
      internetBandwidth: 'InternetBandwidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      intranetBandwidth: 'IntranetBandwidth',
      intranetRX: 'IntranetRX',
      intranetTX: 'IntranetTX',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BPSRead: 'number',
      BPSWrite: 'number',
      CPU: 'number',
      CPUAdvanceCreditBalance: 'number',
      CPUCreditBalance: 'number',
      CPUCreditUsage: 'number',
      CPUNotpaidSurplusCreditUsage: 'number',
      IOPSRead: 'number',
      IOPSWrite: 'number',
      instanceId: 'string',
      internetBandwidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      intranetBandwidth: 'number',
      intranetRX: 'number',
      intranetTX: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

