// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveStreamRecordIndexFilesResponseBodyRecordInfo extends $dara.Model {
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
   * The time when the index file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
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
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The end time of the index file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T07:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The height of the video.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
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
   * The name of the recording that is stored in OSS.
   * 
   * @example
   * liveObject****.m3u8
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
   * The URL of the M3U8 index file.
   */
  recordUrl?: string;
  /**
   * @remarks
   * The start time of the index file. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T07:36:00Z
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
   * The width of the video.
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

export class CreateLiveStreamRecordIndexFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recording configuration.
   */
  recordInfo?: CreateLiveStreamRecordIndexFilesResponseBodyRecordInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 550439A3-F8EC-4CA2-BB62-B9DB43EEEF30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordInfo: 'RecordInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordInfo: CreateLiveStreamRecordIndexFilesResponseBodyRecordInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordInfo && typeof (this.recordInfo as any).validate === 'function') {
      (this.recordInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

