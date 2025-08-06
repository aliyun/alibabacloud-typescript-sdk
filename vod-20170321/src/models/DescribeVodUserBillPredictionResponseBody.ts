// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $dara.Model {
  area?: string;
  timeStp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      timeStp: 'TimeStp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      timeStp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserBillPredictionResponseBodyBillPredictionData extends $dara.Model {
  billPredictionDataItem?: DescribeVodUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem[];
  static names(): { [key: string]: string } {
    return {
      billPredictionDataItem: 'BillPredictionDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionDataItem: { 'type': 'array', 'itemType': DescribeVodUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billPredictionDataItem)) {
      $dara.Model.validateArray(this.billPredictionDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserBillPredictionResponseBody extends $dara.Model {
  billPredictionData?: DescribeVodUserBillPredictionResponseBodyBillPredictionData;
  billType?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billPredictionData: 'BillPredictionData',
      billType: 'BillType',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionData: DescribeVodUserBillPredictionResponseBodyBillPredictionData,
      billType: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.billPredictionData && typeof (this.billPredictionData as any).validate === 'function') {
      (this.billPredictionData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

