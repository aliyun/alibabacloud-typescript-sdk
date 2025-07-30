// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamMergeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application that generates the output stream. The value must be the same as the application name in the ingest URL of the output stream. Otherwise, the configuration does not take effect. You cannot set the value to an asterisk (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the stream mixing.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The interval between the start time and the end time must be within 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-29T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the application that generates the input primary stream. The value must be the same as the application name that is specified in the ingest URL of the primary stream. Otherwise, the configuration does not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * app1
   */
  inAppName1?: string;
  /**
   * @remarks
   * The name of the application that generates the input secondary stream. The value must be the same as the application name that is specified in the ingest URL of the secondary stream. Otherwise, the configuration does not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * app2
   */
  inAppName2?: string;
  /**
   * @remarks
   * The name of the input primary stream. The value must be the same as the stream name that is specified in the ingest URL of the primary stream. Otherwise, the configuration does not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * InStream1
   */
  inStreamName1?: string;
  /**
   * @remarks
   * The name of the input secondary stream. The value must be the same as the stream name that is specified in the ingest URL of the secondary stream. Otherwise, the configuration does not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * stream2
   */
  inStreamName2?: string;
  liveMerger?: string;
  mergeParameters?: string;
  ownerId?: number;
  /**
   * @remarks
   * The streaming protocol. Valid values:
   * 
   * *   **rtmp**: This is the default value.
   * *   **rtc**
   * 
   * @example
   * rtmp
   */
  protocol?: string;
  regionId?: string;
  /**
   * @remarks
   * The start time of the stream mixing.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-29T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the output stream. The value must be the same as the stream name in the ingest URL of the output stream. Otherwise, the configuration does not take effect. You cannot set the value to an asterisk (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      inAppName1: 'InAppName1',
      inAppName2: 'InAppName2',
      inStreamName1: 'InStreamName1',
      inStreamName2: 'InStreamName2',
      liveMerger: 'LiveMerger',
      mergeParameters: 'MergeParameters',
      ownerId: 'OwnerId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      inAppName1: 'string',
      inAppName2: 'string',
      inStreamName1: 'string',
      inStreamName2: 'string',
      liveMerger: 'string',
      mergeParameters: 'string',
      ownerId: 'number',
      protocol: 'string',
      regionId: 'string',
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

