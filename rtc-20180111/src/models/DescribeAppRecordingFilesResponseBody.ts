// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppRecordingFilesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * rtc-bucket
   */
  bucket?: string;
  /**
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @example
   * 1712376032000
   */
  fileCreateTs?: number;
  /**
   * @example
   * 200
   */
  fileDuration?: number;
  /**
   * @example
   * record/appid/12_task_local1/1712279809158_1712279844691/playlist.mp4
   */
  filePath?: string;
  /**
   * @example
   * 10000
   */
  fileSize?: number;
  /**
   * @example
   * 1
   */
  region?: number;
  /**
   * @example
   * 1712376012000
   */
  startTs?: number;
  /**
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      channelId: 'ChannelId',
      fileCreateTs: 'FileCreateTs',
      fileDuration: 'FileDuration',
      filePath: 'FilePath',
      fileSize: 'FileSize',
      region: 'Region',
      startTs: 'StartTs',
      taskId: 'TaskId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      channelId: 'string',
      fileCreateTs: 'number',
      fileDuration: 'number',
      filePath: 'string',
      fileSize: 'number',
      region: 'number',
      startTs: 'number',
      taskId: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesResponseBody extends $dara.Model {
  items?: DescribeAppRecordingFilesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAppRecordingFilesResponseBodyItems },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

