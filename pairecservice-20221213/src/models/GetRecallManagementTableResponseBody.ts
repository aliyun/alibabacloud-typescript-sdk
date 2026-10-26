// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementTableResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * The list of attributes for the field.
   */
  attributes?: string[];
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * The vector dimensions.
   * 
   * @example
   * 32
   */
  vectorDimension?: number;
  /**
   * @remarks
   * The vector metric type.
   * 
   * @example
   * L2
   */
  vectorMetricType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
      vectorDimension: 'VectorDimension',
      vectorMetricType: 'VectorMetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      vectorDimension: 'number',
      vectorMetricType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecallManagementTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table can be deleted.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * The additional configurations of the table.
   * 
   * @example
   * {"item_id":""}
   */
  config?: string;
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
   * The table description.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the fluctuation threshold for the size of the table is enabled.
   * 
   * @example
   * false
   */
  enableDataSizeFluctuationThreshold?: boolean;
  /**
   * @remarks
   * Indicates whether the fluctuation threshold for the row count of the table is enabled.
   * 
   * @example
   * true
   */
  enableRowCountFluctuationThreshold?: boolean;
  /**
   * @remarks
   * The list of fields.
   */
  fields?: GetRecallManagementTableResponseBodyFields[];
  /**
   * @remarks
   * The creation time. The time is displayed in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The time is displayed in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The effective period of the index. The time is displayed in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  indexEffectiveTime?: string;
  /**
   * @remarks
   * The index version ID.
   * 
   * @example
   * 20250701
   */
  indexVersionId?: string;
  /**
   * @remarks
   * The maximum fluctuation threshold for the size of the table.
   * 
   * @example
   * 100
   */
  maxDataSizeFluctuationThreshold?: number;
  /**
   * @remarks
   * The maximum fluctuation threshold for the row count of the table.
   * 
   * @example
   * 100
   */
  maxRowCountFluctuationThreshold?: number;
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
   * The MaxCompute schema.
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
   * The minimum fluctuation threshold for the size of the table.
   * 
   * @example
   * 10
   */
  minDataSizeFluctuationThreshold?: number;
  /**
   * @remarks
   * The minimum fluctuation threshold for the row count of the table.
   * 
   * @example
   * 10
   */
  minRowCountFluctuationThreshold?: number;
  /**
   * @remarks
   * The table name.
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
   * The table ID.
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
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The table type.
   * 
   * @example
   * Recall
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      config: 'Config',
      dataSource: 'DataSource',
      description: 'Description',
      enableDataSizeFluctuationThreshold: 'EnableDataSizeFluctuationThreshold',
      enableRowCountFluctuationThreshold: 'EnableRowCountFluctuationThreshold',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      indexEffectiveTime: 'IndexEffectiveTime',
      indexVersionId: 'IndexVersionId',
      maxDataSizeFluctuationThreshold: 'MaxDataSizeFluctuationThreshold',
      maxRowCountFluctuationThreshold: 'MaxRowCountFluctuationThreshold',
      maxcomputeProjectName: 'MaxcomputeProjectName',
      maxcomputeSchema: 'MaxcomputeSchema',
      maxcomputeTableName: 'MaxcomputeTableName',
      minDataSizeFluctuationThreshold: 'MinDataSizeFluctuationThreshold',
      minRowCountFluctuationThreshold: 'MinRowCountFluctuationThreshold',
      name: 'Name',
      partitionFields: 'PartitionFields',
      recallManagementTableId: 'RecallManagementTableId',
      recallType: 'RecallType',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      config: 'string',
      dataSource: 'string',
      description: 'string',
      enableDataSizeFluctuationThreshold: 'boolean',
      enableRowCountFluctuationThreshold: 'boolean',
      fields: { 'type': 'array', 'itemType': GetRecallManagementTableResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      indexEffectiveTime: 'string',
      indexVersionId: 'string',
      maxDataSizeFluctuationThreshold: 'number',
      maxRowCountFluctuationThreshold: 'number',
      maxcomputeProjectName: 'string',
      maxcomputeSchema: 'string',
      maxcomputeTableName: 'string',
      minDataSizeFluctuationThreshold: 'number',
      minRowCountFluctuationThreshold: 'number',
      name: 'string',
      partitionFields: 'string',
      recallManagementTableId: 'string',
      recallType: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

