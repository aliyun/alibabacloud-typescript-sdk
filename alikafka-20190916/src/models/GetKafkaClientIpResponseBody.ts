// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKafkaClientIpResponseBodyDataDataDataDataData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 58.210.117.154
   */
  ip?: string;
  /**
   * @remarks
   * The statistics.
   * 
   * >  The value of this parameter indicates the number of connections on different ports of the IP address within the specified period of time.
   * 
   * @example
   * 3
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      num: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyDataDataDataData extends $dara.Model {
  data?: GetKafkaClientIpResponseBodyDataDataDataDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetKafkaClientIpResponseBodyDataDataDataDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyDataDataData extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetKafkaClientIpResponseBodyDataDataDataData;
  /**
   * @remarks
   * The request name.
   * 
   * >  The value of this parameter indicates the type of request that the client sends to the broker within the specified period of time.
   * 
   * @example
   * OFFSET_COMMIT
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetKafkaClientIpResponseBodyDataDataDataData,
      name: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyDataData extends $dara.Model {
  data?: GetKafkaClientIpResponseBodyDataDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetKafkaClientIpResponseBodyDataDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value true indicates that the broker is not of the latest minor version.
   * 
   * >  If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @example
   * true
   */
  alert?: boolean;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetKafkaClientIpResponseBodyDataData;
  /**
   * @remarks
   * The end of the date range within which data is queried.
   * 
   * @example
   * 1716343502000
   */
  endDate?: number;
  /**
   * @remarks
   * The time range within which the client IP addresses are queried.
   * 
   * >  The valid value is 1 hour. If the beginning of the time range to query and the end of the time range to query exceeds 1 hour, only data within 1 hour is returned.
   * 
   * @example
   * 1
   */
  searchTimeRange?: number;
  /**
   * @remarks
   * The beginning of the date range within which data is queried.
   * 
   * @example
   * 1716343501000
   */
  startDate?: number;
  /**
   * @remarks
   * The date range within which the client IP addresses are queried.
   * 
   * >  The valid value is 7 days. If the beginning of the date range to query and the end of the date range to query exceeds 7 days, only data within 7 days is returned.
   * 
   * @example
   * 7
   */
  timeLimitDay?: number;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      data: 'Data',
      endDate: 'EndDate',
      searchTimeRange: 'SearchTimeRange',
      startDate: 'StartDate',
      timeLimitDay: 'TimeLimitDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: 'boolean',
      data: GetKafkaClientIpResponseBodyDataData,
      endDate: 'number',
      searchTimeRange: 'number',
      startDate: 'number',
      timeLimitDay: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKafkaClientIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetKafkaClientIpResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E57A8862-DF68-4055-8E55-B80CB4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKafkaClientIpResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

