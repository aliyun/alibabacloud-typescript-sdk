// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamRecordIndexFilesRequest extends $dara.Model {
  /**
   * @remarks
   * System-defined parameter. Value: **DescribeLiveStreamRecordIndexFiles**.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * ## [](#)Usage notes
   * 
   * *   ApsaraVideo Live stores the information about an M3U8 index file for six months. You can query only the information of index files created in the previous six months.
   * *   M3U8 index files are stored in Object Storage Service (OSS) buckets. The retention period is determined by the storage configuration of the OSS buckets.
   * 
   * ## [](#qps-)QPS limit
   * 
   * You can call this operation up to 15 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/343507.html).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order in which the entries are sorted based on creation time. Valid values:
   * 
   * *   **asc** (default): ascending order
   * *   **desc**: descending order
   * 
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **5 to 30**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The main streaming domain.
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
      order: 'Order',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
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
      order: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
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

