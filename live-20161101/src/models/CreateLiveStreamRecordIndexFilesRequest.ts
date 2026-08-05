// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveStreamRecordIndexFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs. The AppName must match the AppName in the ingest URL for the template to take effect. To match all AppName values, set this parameter to *.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streamer streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the index file. TS files uploaded before this time are included in the index file. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to include the end time. If you set this parameter to true, the system attempts to include one additional TS file so that the created index file fully covers the period between StartTime and EndTime.
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
   * The name of the recording file stored in OSS.
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
   * The start time of the index file. TS files uploaded after this time are included in the index file. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name. The StreamName must match the StreamName in the ingest URL for the template to take effect. To match all StreamName values, set this parameter to *.
   * 
   * The stream must have had actual stream ingest activity under the specified DomainName and AppName. Otherwise, the InvalidStream.NotFound error is returned.
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

