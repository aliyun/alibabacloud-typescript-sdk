// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementTablesResponseBodyRecallManagementTables extends $dara.Model {
  /**
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @example
   * Api
   */
  dataSource?: string;
  /**
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  indexEffectiveTime?: string;
  /**
   * @example
   * 20250701
   */
  indexVersionId?: string;
  /**
   * @example
   * test
   */
  maxcomputeProjectName?: string;
  /**
   * @remarks
   * maxcompute schema。
   * 
   * @example
   * default
   */
  maxcomputeSchema?: string;
  /**
   * @example
   * table-1
   */
  maxcomputeTableName?: string;
  /**
   * @example
   * table-123
   */
  name?: string;
  /**
   * @example
   * dt
   */
  partitionFields?: string;
  /**
   * @example
   * 3
   */
  recallManagementTableId?: string;
  /**
   * @example
   * X2I
   */
  recallType?: string;
  /**
   * @example
   * Recall
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      dataSource: 'DataSource',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      indexEffectiveTime: 'IndexEffectiveTime',
      indexVersionId: 'IndexVersionId',
      maxcomputeProjectName: 'MaxcomputeProjectName',
      maxcomputeSchema: 'MaxcomputeSchema',
      maxcomputeTableName: 'MaxcomputeTableName',
      name: 'Name',
      partitionFields: 'PartitionFields',
      recallManagementTableId: 'RecallManagementTableId',
      recallType: 'RecallType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      dataSource: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      indexEffectiveTime: 'string',
      indexVersionId: 'string',
      maxcomputeProjectName: 'string',
      maxcomputeSchema: 'string',
      maxcomputeTableName: 'string',
      name: 'string',
      partitionFields: 'string',
      recallManagementTableId: 'string',
      recallType: 'string',
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

export class ListRecallManagementTablesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  recallManagementTables?: ListRecallManagementTablesResponseBodyRecallManagementTables[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recallManagementTables: 'RecallManagementTables',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      recallManagementTables: { 'type': 'array', 'itemType': ListRecallManagementTablesResponseBodyRecallManagementTables },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recallManagementTables)) {
      $dara.Model.validateArray(this.recallManagementTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

