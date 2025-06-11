// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOasOutlineTaskRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  bySqlId?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_data
   */
  databaseName?: string;
  /**
   * @example
   * false
   */
  dynamicSql?: boolean;
  /**
   * @example
   * 2025-05-13T16:40:43Z
   */
  endTime?: string;
  /**
   * @example
   * idx_a
   */
  indexName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isConcurrentLimit?: boolean;
  /**
   * @example
   * 2
   */
  maxConcurrent?: number;
  /**
   * @example
   * ********
   */
  planData?: string;
  /**
   * @remarks
   * SQL ID
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC
   */
  sqlText?: string;
  /**
   * @example
   * 2025-05-13T15:40:43Z
   */
  startTime?: string;
  /**
   * @example
   * ********
   */
  statementId?: string;
  /**
   * @example
   * test_1
   */
  tableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @example
   * 139*************
   */
  UId?: string;
  static names(): { [key: string]: string } {
    return {
      bySqlId: 'BySqlId',
      databaseName: 'DatabaseName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      indexName: 'IndexName',
      instanceId: 'InstanceId',
      isConcurrentLimit: 'IsConcurrentLimit',
      maxConcurrent: 'MaxConcurrent',
      planData: 'PlanData',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      startTime: 'StartTime',
      statementId: 'StatementId',
      tableName: 'TableName',
      tenantId: 'TenantId',
      UId: 'UId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bySqlId: 'boolean',
      databaseName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      indexName: 'string',
      instanceId: 'string',
      isConcurrentLimit: 'boolean',
      maxConcurrent: 'number',
      planData: 'string',
      sqlId: 'string',
      sqlText: 'string',
      startTime: 'string',
      statementId: 'string',
      tableName: 'string',
      tenantId: 'string',
      UId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

