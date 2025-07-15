// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamRecordIndexFileResponseBodyRecordIndexInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The time when the index file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-05-27T09:40:56Z
   */
  createTime?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The recording length. Unit: seconds.
   * 
   * @example
   * 588.849
   */
  duration?: number;
  /**
   * @remarks
   * The end time of the index file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-05-25T05:47:11Z
   */
  endTime?: string;
  /**
   * @remarks
   * The video format.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * The video height.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The name of the storage file in OSS.
   * 
   * @example
   * liveObject****
   */
  ossObject?: string;
  /**
   * @remarks
   * The ID of the index file.
   * 
   * @example
   * c4d7f0a4-b506-43f9-8de3-07732c3f****
   */
  recordId?: string;
  /**
   * @remarks
   * The URL of the index file.
   */
  recordUrl?: string;
  /**
   * @remarks
   * The start time of the index file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T05:36:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The video width.
   * 
   * @example
   * 640
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      duration: 'Duration',
      endTime: 'EndTime',
      format: 'Format',
      height: 'Height',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      recordId: 'RecordId',
      recordUrl: 'RecordUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      domainName: 'string',
      duration: 'number',
      endTime: 'string',
      format: 'string',
      height: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      recordId: 'string',
      recordUrl: 'string',
      startTime: 'string',
      streamName: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordIndexFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the index file.
   */
  recordIndexInfo?: DescribeLiveStreamRecordIndexFileResponseBodyRecordIndexInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5EBF2AC3-4B73-40A5-8B32-83F49D5F035E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordIndexInfo: 'RecordIndexInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIndexInfo: DescribeLiveStreamRecordIndexFileResponseBodyRecordIndexInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordIndexInfo && typeof (this.recordIndexInfo as any).validate === 'function') {
      (this.recordIndexInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

