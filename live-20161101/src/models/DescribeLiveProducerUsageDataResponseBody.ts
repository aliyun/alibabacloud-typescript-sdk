// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveProducerUsageDataResponseBodyBillProducerDataBillProducerDataItem extends $dara.Model {
  domainName?: string;
  instance?: string;
  outputHdDuration?: number;
  outputLdDuration?: number;
  outputSdDuration?: number;
  region?: string;
  timeStamp?: string;
  tranHdDuration?: number;
  tranLdDuration?: number;
  tranSdDuration?: number;
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
  billProducerData?: DescribeLiveProducerUsageDataResponseBodyBillProducerData;
  /**
   * @remarks
   * The end time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The start time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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

