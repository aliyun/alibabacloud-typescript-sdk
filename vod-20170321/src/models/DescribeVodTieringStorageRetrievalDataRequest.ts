// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTieringStorageRetrievalDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The maximum time range is 31 days. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-02T11:20:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The storage region. By default, data of all regions is returned. You can specify multiple regions separated by commas (,).
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. The minimum data granularity is 5 minutes. If you leave this parameter empty, data of the last 24 hours is returned by default.
   * 
   * @example
   * 2023-06-02T10:20:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * - **IA**: Infrequent Access.
   * - **Archive**: Archive.
   * - **ColdArchive**: Cold Archive.
   * 
   * @example
   * IA
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      startTime: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

