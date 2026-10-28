// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControllerDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > * You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query all clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the logs. Format: **yyyy-MM-ddTHH:mmZ** (UTC).
   * 
   * > When you query logs, the end time must be later than the start time, and the maximum interval between the start time and the end time is 30 days.
   * 
   * @example
   * 2024-06-23T02:21Z
   */
  endTime?: string;
  /**
   * @remarks
   * The language configuration. Valid values:
   * - **zh**: Simplified Chinese (default).
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query supported regions and zones, including region IDs.
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
   * The start time of the query. Format: <i>yyyy-MM-ddTHH:mmZ</i> (UTC).
   * 
   * @example
   * 2022-03-10T23:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
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
      ownerAccount: 'string',
      ownerId: 'number',
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

