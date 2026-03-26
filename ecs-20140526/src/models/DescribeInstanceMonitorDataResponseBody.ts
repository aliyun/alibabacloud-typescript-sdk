// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData extends $dara.Model {
  BPSRead?: number;
  BPSWrite?: number;
  CPU?: number;
  CPUAdvanceCreditBalance?: number;
  CPUCreditBalance?: number;
  CPUCreditUsage?: number;
  CPUNotpaidSurplusCreditUsage?: number;
  IOPSRead?: number;
  IOPSWrite?: number;
  instanceId?: string;
  internetBandwidth?: number;
  internetRX?: number;
  internetTX?: number;
  intranetBandwidth?: number;
  intranetRX?: number;
  intranetTX?: number;
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

export class DescribeInstanceMonitorDataResponseBodyMonitorData extends $dara.Model {
  instanceMonitorData?: DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.instanceMonitorData)) {
      $dara.Model.validateArray(this.instanceMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBody extends $dara.Model {
  monitorData?: DescribeInstanceMonitorDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeInstanceMonitorDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.monitorData && typeof (this.monitorData as any).validate === 'function') {
      (this.monitorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

