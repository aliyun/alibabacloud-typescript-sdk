// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKvRealTimeQpsDataResponseBodyAggregateData extends $dara.Model {
  /**
   * @example
   * 123
   */
  acc?: number;
  /**
   * @example
   * get
   */
  accessType?: string;
  /**
   * @example
   * 1234
   */
  keyAcc?: number;
  /**
   * @example
   * 1233
   */
  keySuccAcc?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      accessType: 'AccessType',
      keyAcc: 'KeyAcc',
      keySuccAcc: 'KeySuccAcc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      accessType: 'string',
      keyAcc: 'number',
      keySuccAcc: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKvRealTimeQpsDataResponseBodyKvQpsData extends $dara.Model {
  /**
   * @example
   * get
   */
  accessType?: string;
  /**
   * @example
   * 1234
   */
  keyQps?: number;
  /**
   * @example
   * 1233
   */
  keySuccQps?: number;
  /**
   * @example
   * 534167033424646***
   */
  namespaceId?: string;
  /**
   * @example
   * 5236
   */
  qps?: number;
  /**
   * @example
   * 2023-01-10T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      keyQps: 'KeyQps',
      keySuccQps: 'KeySuccQps',
      namespaceId: 'NamespaceId',
      qps: 'Qps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      keyQps: 'number',
      keySuccQps: 'number',
      namespaceId: 'string',
      qps: 'number',
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

export class DescribeKvRealTimeQpsDataResponseBody extends $dara.Model {
  aggregateData?: DescribeKvRealTimeQpsDataResponseBodyAggregateData[];
  /**
   * @example
   * 2023-01-18T15:59:59Z
   */
  endTime?: string;
  kvQpsData?: DescribeKvRealTimeQpsDataResponseBodyKvQpsData[];
  /**
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92C***
   */
  requestId?: string;
  /**
   * @example
   * 2023-01-10T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateData: 'AggregateData',
      endTime: 'EndTime',
      kvQpsData: 'KvQpsData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateData: { 'type': 'array', 'itemType': DescribeKvRealTimeQpsDataResponseBodyAggregateData },
      endTime: 'string',
      kvQpsData: { 'type': 'array', 'itemType': DescribeKvRealTimeQpsDataResponseBodyKvQpsData },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregateData)) {
      $dara.Model.validateArray(this.aggregateData);
    }
    if(Array.isArray(this.kvQpsData)) {
      $dara.Model.validateArray(this.kvQpsData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

