// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainPvDataResponseBodyPvDataIntervalPvDataInterval extends $dara.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainPvDataResponseBodyPvDataInterval extends $dara.Model {
  pvDataInterval?: DescribeVodDomainPvDataResponseBodyPvDataIntervalPvDataInterval[];
  static names(): { [key: string]: string } {
    return {
      pvDataInterval: 'PvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvDataInterval: { 'type': 'array', 'itemType': DescribeVodDomainPvDataResponseBodyPvDataIntervalPvDataInterval },
    };
  }

  validate() {
    if(Array.isArray(this.pvDataInterval)) {
      $dara.Model.validateArray(this.pvDataInterval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainPvDataResponseBody extends $dara.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  pvDataInterval?: DescribeVodDomainPvDataResponseBodyPvDataInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvDataInterval: 'PvDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvDataInterval: DescribeVodDomainPvDataResponseBodyPvDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pvDataInterval && typeof (this.pvDataInterval as any).validate === 'function') {
      (this.pvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

