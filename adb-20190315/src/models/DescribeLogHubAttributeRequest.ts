// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogHubAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1nz6smy07szs58p
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the log shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * sz_sls2adb_kxdpz_af_data
   */
  deliverName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * game2-sms-log
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * dcsz-af-data
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      deliverName: 'DeliverName',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      deliverName: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

