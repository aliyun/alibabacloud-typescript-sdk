// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTieringStorageDataRequest extends $dara.Model {
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
   * The end time of the query. The end time must be later than the start time. The time range cannot exceed 31 days. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2023-05-29T02:00:00Z
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
   * The start time of the query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time must be in UTC. If this parameter is left empty, data of the last 24 hours is returned by default.
   * 
   * @example
   * 2023-05-29T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage class. By default, data of all storage classes is returned. Valid values:
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

