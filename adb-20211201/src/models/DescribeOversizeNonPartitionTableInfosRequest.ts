// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOversizeNonPartitionTableInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is in UTC and follows the <i>yyyy-MM-ddTHH:mm:ssZ</i> format.
   * > The end time must be later than the start time. The interval between the start time and the end time must be less than 7 days.
   * 
   * @example
   * 2024-05-11T05:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the title for the downloaded file and specific error messages. Valid values:
   * - **zh**: Simplified Chinese. This is the default value.
   * - **en**: English.
   * - **ja**: Japanese.
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sorting rule for a specified field. The value is a JSON array. You must specify the fields to be sorted and the sorting order in sequence. Example:
   * 
   * ```
   * [
   * 
   *     {
   * 
   *         "Field":"Name",
   * 
   *         "Type":"Asc"
   * 
   *     }
   * 
   * ]
   * ```
   * 
   * Field: the name of the field to be sorted. Only the Name field is supported.
   * Type: the sorting order. Valid values: Desc for descending order, and Asc for ascending order.
   * 
   * The values are not case-sensitive.
   * 
   * @example
   * [{"Field":"SchemaName","Type":"Asc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - 30
   * - 50
   * - 100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. The time is in UTC and follows the yyyy-MM-ddTHH:mmZ format.
   * > SQL audit logs can be queried only when SQL audit is enabled. You can query SQL audit logs generated within the last 30 days. If SQL audit is disabled and then re-enabled, you can query only the SQL audit logs generated after it is re-enabled.
   * 
   * @example
   * 2024-05-11T05:44Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

