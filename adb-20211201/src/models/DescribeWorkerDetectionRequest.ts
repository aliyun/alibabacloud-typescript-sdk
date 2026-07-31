// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkerDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL clusters in a region, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-xxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the query time range. Specify the time in the <i>yyyy-MM-ddTHH:mmZ</i> format (UTC).
   * 
   * @example
   * 2024-04-25T02:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The display language of suggestions. Valid values:
   * - **zh**: simplified Chinese (default).
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612293.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the query time range. Specify the time in the <i>yyyy-MM-ddTHH:mmZ</i> format (UTC).
   * 
   * @example
   * 2021-11-18T00:00Z
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

