// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodMultiUsageDataResponseBodyMultiUsageDataDataModule extends $dara.Model {
  value?: number;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodMultiUsageDataResponseBodyMultiUsageData extends $dara.Model {
  dataModule?: DescribeVodMultiUsageDataResponseBodyMultiUsageDataDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodMultiUsageDataResponseBodyMultiUsageDataDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodMultiUsageDataResponseBody extends $dara.Model {
  endTime?: string;
  multiUsageData?: DescribeVodMultiUsageDataResponseBodyMultiUsageData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      multiUsageData: 'MultiUsageData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      multiUsageData: DescribeVodMultiUsageDataResponseBodyMultiUsageData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.multiUsageData && typeof (this.multiUsageData as any).validate === 'function') {
      (this.multiUsageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

