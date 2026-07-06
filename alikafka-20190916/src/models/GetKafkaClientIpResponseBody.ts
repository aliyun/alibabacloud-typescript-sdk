// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKafkaClientIpResponseBodyDataDataDataDataData extends $dara.Model {
  ip?: string;
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
  data?: GetKafkaClientIpResponseBodyDataDataDataData;
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
   * If this value is true, it indicates that the minor version is not the latest version.
   * 
   * > If your server minor version is not the latest version, the sampling logs may not be accurate enough, resulting in less precise IP information statistics. Therefore, it is recommended that you upgrade the server minor version as soon as possible.
   * 
   * @example
   * true
   */
  alert?: boolean;
  data?: GetKafkaClientIpResponseBodyDataData;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 1716343502000
   */
  endDate?: number;
  /**
   * @remarks
   * The time range for querying client IPs.
   * 
   * > This range is 1 hour. If the start time and end time you enter exceed 1 hour, only data within 1 hour will be queried.
   * 
   * @example
   * 1
   */
  searchTimeRange?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1716343501000
   */
  startDate?: number;
  /**
   * @remarks
   * The date range for querying client IPs.
   * 
   * > This range is 7 days. If the start time and end time you enter exceed 7 days, only data within 7 days will be queried.
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
   * Return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetKafkaClientIpResponseBodyData;
  /**
   * @remarks
   * The prompt message for the result.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
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

