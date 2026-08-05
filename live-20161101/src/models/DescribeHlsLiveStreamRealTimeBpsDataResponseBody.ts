// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos extends $dara.Model {
  downFlow?: number;
  online?: number;
  rate?: string;
  static names(): { [key: string]: string } {
    return {
      downFlow: 'DownFlow',
      online: 'Online',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downFlow: 'number',
      online: 'number',
      rate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos extends $dara.Model {
  infos?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos[];
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      infos: 'Infos',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos },
      streamName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.infos)) {
      $dara.Model.validateArray(this.infos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData extends $dara.Model {
  domainName?: string;
  streamInfos?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      streamInfos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfos)) {
      $dara.Model.validateArray(this.streamInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBody extends $dara.Model {
  requestId?: string;
  time?: string;
  usageData?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      time: 'Time',
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      time: 'string',
      usageData: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

