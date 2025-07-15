// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveStreamRecordIndexFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. The value of this parameter must be the same as the application name in the ingest URL. Otherwise, the configuration does not take effect. If you want to match all applications, specify an asterisk (\\*) as the value.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the index file. TS segments that are uploaded before the end time are included in the index file. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to include the end time. If you set this parameter to true, the system attempts to include one more TS segment. The created index file covers the entire time range that is specified by the StartTime and EndTime parameters.
   * 
   * @example
   * false
   */
  endTimeIncluded?: boolean;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The name of the recording that is stored in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * {AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.m3u8
   */
  ossObject?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The start time of the index file. TS segments that are uploaded after the start time are included in the index file. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. The value of this parameter must be the same as the stream name in the ingest URL. Otherwise, the configuration does not take effect. If you want to match all streams, specify an asterisk (\\*) as the value.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      endTimeIncluded: 'EndTimeIncluded',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      endTimeIncluded: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      ownerId: 'number',
      securityToken: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

