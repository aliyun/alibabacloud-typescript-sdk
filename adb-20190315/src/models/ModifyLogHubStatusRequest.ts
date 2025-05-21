// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogHubStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6j8370er80m6wf3
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the log shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * loghub-mnp-report
   */
  deliverName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * pay-notify-wx
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
   * test-adb
   */
  projectName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the log shipping job.
   * 
   * Valid values:
   * 
   * *   Delete
   * *   Pause
   * *   Restart
   * 
   * This parameter is required.
   * 
   * @example
   * Pause
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      deliverName: 'DeliverName',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
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
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

