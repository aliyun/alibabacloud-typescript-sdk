// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The transcoding specification. Valid values:
   * 
   * *   **Audio**: audio transcoding
   * *   **Segmentation**: container format conversion
   * *   **H264.LD, H264.SD, H264.HD, H264.2K, H264.4K, and more**
   * 
   * @example
   * H264.SD
   */
  name?: string;
  /**
   * @remarks
   * The transcoding duration. Unit: seconds.
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

export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemData extends $dara.Model {
  dataItem?: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem[];
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: { 'type': 'array', 'itemType': DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemDataDataItem },
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

export class DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItem extends $dara.Model {
  /**
   * @remarks
   * The statistics on transcoding of different specifications.
   */
  data?: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemData;
  /**
   * @remarks
   * The timestamp of the returned data. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-01T16:00:00Z
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
      data: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItemData,
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

export class DescribeVodTranscodeDataResponseBodyTranscodeData extends $dara.Model {
  transcodeDataItem?: DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItem[];
  static names(): { [key: string]: string } {
    return {
      transcodeDataItem: 'TranscodeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeDataItem: { 'type': 'array', 'itemType': DescribeVodTranscodeDataResponseBodyTranscodeDataTranscodeDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.transcodeDataItem)) {
      $dara.Model.validateArray(this.transcodeDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTranscodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The interval at which the data was queried. Valid values:
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
  /**
   * @remarks
   * The transcoding statistics returned.
   */
  transcodeData?: DescribeVodTranscodeDataResponseBodyTranscodeData;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      requestId: 'RequestId',
      transcodeData: 'TranscodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      requestId: 'string',
      transcodeData: DescribeVodTranscodeDataResponseBodyTranscodeData,
    };
  }

  validate() {
    if(this.transcodeData && typeof (this.transcodeData as any).validate === 'function') {
      (this.transcodeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

