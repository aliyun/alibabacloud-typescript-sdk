// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRecordNotifyRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streamer\\"s streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-10T21:03:47Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 500. Valid values: any integer from 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * > You can query data within the last 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-10T21:03:47Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the callback was successful. Valid values:
   * - success: The callback was successful.
   * - failed: The callback failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The storage type of the recording for which to query callback records. Valid values:
   * 
   * - oss: recorded to OSS
   * 
   * - vod: recorded to ApsaraVideo VOD
   * 
   * - all: queries callback records for all storage types
   * 
   * @example
   * oss
   */
  storageType?: string;
  /**
   * @remarks
   * The stream name.
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
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
      storageType: 'StorageType',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      status: 'string',
      storageType: 'string',
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

