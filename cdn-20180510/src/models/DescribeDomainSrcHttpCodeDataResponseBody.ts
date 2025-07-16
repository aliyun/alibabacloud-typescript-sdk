// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2300
   */
  count?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 67.1458998935037
   */
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      proportion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $dara.Model {
  codeProportionData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.codeProportionData)) {
      $dara.Model.validateArray(this.codeProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-11-30T05:30:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The proportions of the HTTP status codes.
   */
  value?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData extends $dara.Model {
  usageData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData },
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

export class DescribeDomainSrcHttpCodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The proportions of HTTP status codes at each time interval.
   */
  httpCodeData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C85ACF7
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeData: 'HttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeData: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.httpCodeData && typeof (this.httpCodeData as any).validate === 'function') {
      (this.httpCodeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

