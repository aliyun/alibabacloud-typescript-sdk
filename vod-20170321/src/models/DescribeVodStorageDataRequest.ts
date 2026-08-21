// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStorageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. If you have activated the multi-application feature, you can specify this parameter to query the storage usage of a specific application. If you do not specify this parameter, the total storage usage of all applications is returned. You can obtain the value of this parameter from the AppId response parameter of the [CreateAppInfo](~~CreateAppInfo~~) operation. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113601.html).
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T15:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The storage region. By default, data of all regions is returned. You can specify multiple regions separated by commas (,). Valid values:
   * 
   * - **cn-shanghai**: Shanghai.
   * - **cn-beijing**: Beijing.
   * - **eu-central-1**: Germany.
   * - **ap-southeast-1**: Singapore.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-02-01T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage name (Alibaba Cloud OSS bucket name). By default, data of all storage buckets is returned. You can specify multiple storage names separated by commas (,).
   * 
   * @example
   * bucket
   */
  storage?: string;
  /**
   * @remarks
   * The storage type. Set the value to **OSS**.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
      storage: 'Storage',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      startTime: 'string',
      storage: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

