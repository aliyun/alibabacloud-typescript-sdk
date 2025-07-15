// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePushProxyUsageDataResponseBodyPushProxyDataPushProxyDataItem extends $dara.Model {
  /**
   * @remarks
   * The domain name. If the value of SplitBy includes domain, the returned data is grouped by domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the region. If the value of SplitBy includes region, the returned data is grouped by region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The peak number of live center stream relay channels.
   * 
   * @example
   * 8
   */
  streamCount?: number;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      region: 'Region',
      streamCount: 'StreamCount',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      region: 'string',
      streamCount: 'number',
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

export class DescribeLivePushProxyUsageDataResponseBodyPushProxyData extends $dara.Model {
  pushProxyDataItem?: DescribeLivePushProxyUsageDataResponseBodyPushProxyDataPushProxyDataItem[];
  static names(): { [key: string]: string } {
    return {
      pushProxyDataItem: 'PushProxyDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushProxyDataItem: { 'type': 'array', 'itemType': DescribeLivePushProxyUsageDataResponseBodyPushProxyDataPushProxyDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.pushProxyDataItem)) {
      $dara.Model.validateArray(this.pushProxyDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePushProxyUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The usage data of live center stream relay.
   */
  pushProxyData?: DescribeLivePushProxyUsageDataResponseBodyPushProxyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B460F8B-993C-4F48-B98A-910811DEBFEB
   */
  requestId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pushProxyData: 'PushProxyData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pushProxyData: DescribeLivePushProxyUsageDataResponseBodyPushProxyData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pushProxyData && typeof (this.pushProxyData as any).validate === 'function') {
      (this.pushProxyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

