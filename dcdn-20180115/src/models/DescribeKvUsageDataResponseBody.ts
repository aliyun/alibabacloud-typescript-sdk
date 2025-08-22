// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKvUsageDataResponseBodyKvUsageData extends $dara.Model {
  /**
   * @remarks
   * The number of visits.
   * 
   * @example
   * 1340000
   */
  acc?: number;
  /**
   * @remarks
   * The request method. This parameter is available only when the **SplitBy** parameter is set to **type**.
   * 
   * @example
   * get
   */
  accessType?: string;
  /**
   * @remarks
   * The namespace ID. This parameter is available only when the **SplitBy** parameter is set to **namespace**.
   * 
   * @example
   * 534167033424646144
   */
  namespaceId?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2022-11-14T15:00:03Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      accessType: 'AccessType',
      namespaceId: 'NamespaceId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      accessType: 'string',
      namespaceId: 'string',
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

export class DescribeKvUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2022-11-18T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The usage details.
   */
  kvUsageData?: DescribeKvUsageDataResponseBodyKvUsageData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2022-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      kvUsageData: 'KvUsageData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      kvUsageData: { 'type': 'array', 'itemType': DescribeKvUsageDataResponseBodyKvUsageData },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kvUsageData)) {
      $dara.Model.validateArray(this.kvUsageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

