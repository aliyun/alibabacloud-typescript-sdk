// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpgradeReportRequest extends $dara.Model {
  /**
   * @remarks
   * The product series. Valid values:
   * 
   * - **Normal**: Cluster Edition (default)
   * 
   * - **SENormal**: Standard Edition
   * 
   * For more information, see [Product series](https://help.aliyun.com/document_detail/183258.html).
   * 
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The compatible database version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * > For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/98041.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * rm-2zen5pe5vi56447d0
   */
  sourceDBClusterId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2321321
   */
  taskId?: string;
  /**
   * @remarks
   * A special metric. This parameter is supported only for instances that use the Tair architecture.
   * 
   * @example
   * orca
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationCategory: 'CreationCategory',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBClusterId: 'SourceDBClusterId',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationCategory: 'string',
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBClusterId: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

