// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodAIDataResponseBodyAIDataAIDataItemDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The type of video AI. Valid values:
   * 
   * *   **AIVideoCensor**: automated review
   * *   **AIVideoFPShot**: media fingerprinting
   * *   **AIVideoTag**: smart tagging
   * 
   * @example
   * AIVideoCensor
   */
  name?: string;
  /**
   * @remarks
   * The processing duration. Unit: seconds.
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBodyAIDataAIDataItemData extends $dara.Model {
  dataItem?: DescribeVodAIDataResponseBodyAIDataAIDataItemDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeVodAIDataResponseBodyAIDataAIDataItemDataDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.dataItem)) {
      $dara.Model.validateArray(this.dataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBodyAIDataAIDataItem extends $dara.Model {
  /**
   * @remarks
   * The statistics on video AI of each type.
   */
  data?: DescribeVodAIDataResponseBodyAIDataAIDataItemData;
  /**
   * @remarks
   * The timestamp of the returned data. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-01T13:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeVodAIDataResponseBodyAIDataAIDataItemData,
      timeStamp: 'string',
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

export class DescribeVodAIDataResponseBodyAIData extends $dara.Model {
  AIDataItem?: DescribeVodAIDataResponseBodyAIDataAIDataItem[];
  static names(): { [key: string]: string } {
    return {
      AIDataItem: 'AIDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDataItem: { 'type': 'array', 'itemType': DescribeVodAIDataResponseBodyAIDataAIDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.AIDataItem)) {
      $dara.Model.validateArray(this.AIDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodAIDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on video AI.
   */
  AIData?: DescribeVodAIDataResponseBodyAIData;
  /**
   * @remarks
   * The time granularity at which the data was queried. Valid values:
   * 
   * *   **hour**
   * *   **day**
   * 
   * @example
   * day
   */
  dataInterval?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-****-9A87633D248E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIData: 'AIData',
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIData: DescribeVodAIDataResponseBodyAIData,
      dataInterval: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIData && typeof (this.AIData as any).validate === 'function') {
      (this.AIData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

