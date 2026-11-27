// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppRecordingFilesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * User-defined bucket.
   * 
   * @example
   * rtc-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @remarks
   * Recording file creation timestamp, in milliseconds.
   * 
   * @example
   * 1712376032000
   */
  fileCreateTs?: number;
  /**
   * @remarks
   * Recording file duration, in milliseconds.
   * 
   * @example
   * 200
   */
  fileDuration?: number;
  /**
   * @remarks
   * Path where the recording file is stored. Use the SDK of your cloud provider\"s Object Storage Service to access the file. For Alibaba Cloud OSS, see [here](https://help.aliyun.com/zh/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects).
   * 
   * @example
   * record/appid/12_task_local1/1712279809158_1712279844691/playlist.mp4
   */
  filePath?: string;
  /**
   * @remarks
   * Recording file size, in bytes.
   * 
   * @example
   * 10000
   */
  fileSize?: number;
  /**
   * @remarks
   * See region used in the recording task.
   * 
   * @example
   * 1
   */
  region?: number;
  /**
   * @remarks
   * Recording task start timestamp, in milliseconds.
   * 
   * @example
   * 1712376012000
   */
  startTs?: number;
  /**
   * @remarks
   * Recording task ID.
   * 
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @remarks
   * See vendor used when starting the recording task.
   * 
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
  /**
   * @remarks
   * List of recording files.
   */
  items?: DescribeAppRecordingFilesResponseBodyItems[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
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
   * @remarks
   * Total count.
   * 
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

