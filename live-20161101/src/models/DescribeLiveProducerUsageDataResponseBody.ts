// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveProducerUsageDataResponseBodyBillProducerDataBillProducerDataItem extends $dara.Model {
  /**
   * @remarks
   * The domain name. If domain is specified by the SplitBy parameter, the usage data is returned based on different domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The production studio instance. If instance is specified by the SplitBy parameter, the usage data is returned based on different production studio instances.
   * 
   * @example
   * a17d0184-462d-4630-b2a6-8c26dde2****
   */
  instance?: string;
  /**
   * @remarks
   * The duration of high definition streaming. Unit: minutes.
   * 
   * @example
   * 6000
   */
  outputHdDuration?: number;
  /**
   * @remarks
   * The duration of low definition streaming. Unit: minutes.
   * 
   * @example
   * 1001
   */
  outputLdDuration?: number;
  /**
   * @remarks
   * The duration of standard definition streaming. Unit: minutes.
   * 
   * @example
   * 500
   */
  outputSdDuration?: number;
  /**
   * @remarks
   * The region. If region is specified by the SplitBy parameter, the usage data is returned based on different regions.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2018-09-30T00:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The duration of high definition transcoding. Unit: minutes.
   * 
   * @example
   * 6777
   */
  tranHdDuration?: number;
  /**
   * @remarks
   * The duration of low definition transcoding. Unit: minutes.
   * 
   * @example
   * 111
   */
  tranLdDuration?: number;
  /**
   * @remarks
   * The duration of standard definition transcoding. Unit: minutes.
   * 
   * @example
   * 666
   */
  tranSdDuration?: number;
  /**
   * @remarks
   * The type of the production studio. If type is specified by the SplitBy parameter, the usage data is returned based on different types of production studios.
   * 
   * @example
   * slidelive
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instance: 'Instance',
      outputHdDuration: 'OutputHdDuration',
      outputLdDuration: 'OutputLdDuration',
      outputSdDuration: 'OutputSdDuration',
      region: 'Region',
      timeStamp: 'TimeStamp',
      tranHdDuration: 'TranHdDuration',
      tranLdDuration: 'TranLdDuration',
      tranSdDuration: 'TranSdDuration',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instance: 'string',
      outputHdDuration: 'number',
      outputLdDuration: 'number',
      outputSdDuration: 'number',
      region: 'string',
      timeStamp: 'string',
      tranHdDuration: 'number',
      tranLdDuration: 'number',
      tranSdDuration: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveProducerUsageDataResponseBodyBillProducerData extends $dara.Model {
  billProducerDataItem?: DescribeLiveProducerUsageDataResponseBodyBillProducerDataBillProducerDataItem[];
  static names(): { [key: string]: string } {
    return {
      billProducerDataItem: 'BillProducerDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billProducerDataItem: { 'type': 'array', 'itemType': DescribeLiveProducerUsageDataResponseBodyBillProducerDataBillProducerDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billProducerDataItem)) {
      $dara.Model.validateArray(this.billProducerDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveProducerUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The production studio usage data.
   */
  billProducerData?: DescribeLiveProducerUsageDataResponseBodyBillProducerData;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range for which the data was queried.
   * 
   * @example
   * 2018-10-31T15:59:59Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billProducerData: 'BillProducerData',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billProducerData: DescribeLiveProducerUsageDataResponseBodyBillProducerData,
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.billProducerData && typeof (this.billProducerData as any).validate === 'function') {
      (this.billProducerData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

