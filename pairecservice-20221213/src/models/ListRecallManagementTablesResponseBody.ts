// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementTablesResponseBodyRecallManagementTables extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table can be deleted.
   * 
   * @example
   * false
   */
  canDelete?: boolean;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * Api
   */
  dataSource?: string;
  /**
   * @remarks
   * The description of the recall management table.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * The time when the table was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the table was last modified. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The time when the index takes effect. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  indexEffectiveTime?: string;
  /**
   * @remarks
   * The ID of the index version.
   * 
   * @example
   * 20250701
   */
  indexVersionId?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * test
   */
  maxcomputeProjectName?: string;
  /**
   * @remarks
   * The schema of the MaxCompute table.
   * 
   * @example
   * default
   */
  maxcomputeSchema?: string;
  /**
   * @remarks
   * The name of the table in MaxCompute.
   * 
   * @example
   * table-1
   */
  maxcomputeTableName?: string;
  /**
   * @remarks
   * The name of the recall management table.
   * 
   * @example
   * table-123
   */
  name?: string;
  /**
   * @remarks
   * The partition fields of the table.
   * 
   * @example
   * dt
   */
  partitionFields?: string;
  /**
   * @remarks
   * The ID of the recall management table.
   * 
   * @example
   * 3
   */
  recallManagementTableId?: string;
  /**
   * @remarks
   * The recall type of the table.
   * 
   * @example
   * X2I
   */
  recallType?: string;
  /**
   * @remarks
   * The type of the table.
   * 
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
   * @remarks
   * This parameter is reserved for future use.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is reserved for future use.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of recall management tables.
   */
  recallManagementTables?: ListRecallManagementTablesResponseBodyRecallManagementTables[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of recall management tables.
   * 
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

