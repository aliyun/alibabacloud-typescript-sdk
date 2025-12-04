// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccFlowInfosResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The direction.
   * 
   * @example
   * OUT
   */
  direction?: string;
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * @example
   * passBytesRate
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Time
   * 
   * @example
   * 1689749749000
   */
  timestamp?: number;
  /**
   * @remarks
   * Value
   * 
   * @example
   * 123
   */
  value?: number;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2w******
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      metricName: 'MetricName',
      regionId: 'RegionId',
      timestamp: 'Timestamp',
      value: 'Value',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      metricName: 'string',
      regionId: 'string',
      timestamp: 'number',
      value: 'number',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccFlowInfosResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Connection Traffic Information
   */
  data?: ListVccFlowInfosResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccFlowInfosResponseBodyContentData },
      total: 'number',
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

export class ListVccFlowInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * 访问被拒绝的详细原因。
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: ListVccFlowInfosResponseBodyContent;
  /**
   * @remarks
   * Response
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVccFlowInfosResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

