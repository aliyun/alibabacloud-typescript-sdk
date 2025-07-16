// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $dara.Model {
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
   * The count of each HTTP status code.
   * 
   * @example
   * 300
   */
  count?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 66.046511627907
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

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $dara.Model {
  codeProportionData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
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

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2021-06-29T05:40:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The information about the HTTP status codes.
   */
  value?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
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

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeData extends $dara.Model {
  usageData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData },
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

export class DescribeDomainHttpCodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval.
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
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2021-06-29T05:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The proportions of HTTP status codes at each time interval.
   */
  httpCodeData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeData;
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
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2021-06-29T05:30:00Z
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
      httpCodeData: DescribeDomainHttpCodeDataResponseBodyHttpCodeData,
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

