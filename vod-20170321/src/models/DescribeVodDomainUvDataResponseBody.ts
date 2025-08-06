// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainUvDataResponseBodyUvDataIntervalUvDataInterval extends $dara.Model {
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

export class DescribeVodDomainUvDataResponseBodyUvDataInterval extends $dara.Model {
  uvDataInterval?: DescribeVodDomainUvDataResponseBodyUvDataIntervalUvDataInterval[];
  static names(): { [key: string]: string } {
    return {
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uvDataInterval: { 'type': 'array', 'itemType': DescribeVodDomainUvDataResponseBodyUvDataIntervalUvDataInterval },
    };
  }

  validate() {
    if(Array.isArray(this.uvDataInterval)) {
      $dara.Model.validateArray(this.uvDataInterval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainUvDataResponseBody extends $dara.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  uvDataInterval?: DescribeVodDomainUvDataResponseBodyUvDataInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      uvDataInterval: DescribeVodDomainUvDataResponseBodyUvDataInterval,
    };
  }

  validate() {
    if(this.uvDataInterval && typeof (this.uvDataInterval as any).validate === 'function') {
      (this.uvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

