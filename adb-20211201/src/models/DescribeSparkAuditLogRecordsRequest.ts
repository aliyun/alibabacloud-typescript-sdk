// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkAuditLogRecordsRequest extends $dara.Model {
  /**
   * @example
   * 192.168.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-bp1j7******78j8i
   */
  DBClusterId?: string;
  /**
   * @example
   * 2025-09-25T01:00Z
   */
  endTime?: string;
  /**
   * @example
   * [{\\"Field\\":\\"ExecuteTime\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 999f2439-6b10-xxxx-a5d3-daf3b35c****
   */
  processId?: string;
  /**
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * test_job
   */
  resourceGroupName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * test_table_name
   */
  SQLText?: string;
  /**
   * @example
   * 2025-09-25T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Statement ID。
   * 
   * @example
   * fbd22066-1c03-xxxx-aa16-6ae28288****
   */
  statementId?: string;
  /**
   * @example
   * SQL_EDITOR
   */
  statementSource?: string;
  /**
   * @example
   * finish
   */
  status?: string;
  /**
   * @example
   * 3000
   */
  totalTime?: string;
  /**
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processId: 'ProcessId',
      proxyUser: 'ProxyUser',
      regionId: 'RegionId',
      resourceGroupName: 'ResourceGroupName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQLText: 'SQLText',
      startTime: 'StartTime',
      statementId: 'StatementId',
      statementSource: 'StatementSource',
      status: 'Status',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      processId: 'string',
      proxyUser: 'string',
      regionId: 'string',
      resourceGroupName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQLText: 'string',
      startTime: 'string',
      statementId: 'string',
      statementSource: 'string',
      status: 'string',
      totalTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

