// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainMonitoringUsageDataResponseBodyMonitoringDataMonitoringDataItem extends $dara.Model {
  domainName?: string;
  duration?: number;
  instanceId?: string;
  region?: string;
  resolution?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      duration: 'Duration',
      instanceId: 'InstanceId',
      region: 'Region',
      resolution: 'Resolution',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      duration: 'number',
      instanceId: 'string',
      region: 'string',
      resolution: 'string',
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

export class DescribeLiveDomainMonitoringUsageDataResponseBodyMonitoringData extends $dara.Model {
  monitoringDataItem?: DescribeLiveDomainMonitoringUsageDataResponseBodyMonitoringDataMonitoringDataItem[];
  static names(): { [key: string]: string } {
    return {
      monitoringDataItem: 'MonitoringDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitoringDataItem: { 'type': 'array', 'itemType': DescribeLiveDomainMonitoringUsageDataResponseBodyMonitoringDataMonitoringDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.monitoringDataItem)) {
      $dara.Model.validateArray(this.monitoringDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMonitoringUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 2022-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * @example
   * e62af24d-a354-3b0c-9f1f-da592c4b****
   */
  instanceId?: string;
  monitoringData?: DescribeLiveDomainMonitoringUsageDataResponseBodyMonitoringData;
  /**
   * @remarks
   * The region of the live center.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range.
   * 
   * @example
   * 2022-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      monitoringData: 'MonitoringData',
      region: 'Region',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      instanceId: 'string',
      monitoringData: DescribeLiveDomainMonitoringUsageDataResponseBodyMonitoringData,
      region: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.monitoringData && typeof (this.monitoringData as any).validate === 'function') {
      (this.monitoringData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

