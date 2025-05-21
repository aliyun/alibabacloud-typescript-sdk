// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of query results. Valid values:
   * 
   * *   **zh-CN** (default): Chinese.
   * *   **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
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
   * The zone ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      DBClusterVersion: 'DBClusterVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      DBClusterVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

