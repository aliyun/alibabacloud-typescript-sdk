// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementTableResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * A list of field attributes.
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
   * The vector dimension.
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
   * Specifies whether the table can be deleted.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Additional configurations for the table.
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
   * The data table description.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the fluctuation threshold for the data size.
   * 
   * @example
   * false
   */
  enableDataSizeFluctuationThreshold?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the fluctuation threshold for the row count.
   * 
   * @example
   * true
   */
  enableRowCountFluctuationThreshold?: boolean;
  /**
   * @remarks
   * A list of fields.
   */
  fields?: GetRecallManagementTableResponseBodyFields[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The index effective time.
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
   * The maximum data size fluctuation threshold.
   * 
   * @example
   * 100
   */
  maxDataSizeFluctuationThreshold?: number;
  /**
   * @remarks
   * The maximum row count fluctuation threshold.
   * 
   * @example
   * 100
   */
  maxRowCountFluctuationThreshold?: number;
  /**
   * @remarks
   * The MaxCompute project name.
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
   * The MaxCompute table name.
   * 
   * @example
   * table-1
   */
  maxcomputeTableName?: string;
  /**
   * @remarks
   * The minimum data size fluctuation threshold.
   * 
   * @example
   * 10
   */
  minDataSizeFluctuationThreshold?: number;
  /**
   * @remarks
   * The minimum row count fluctuation threshold.
   * 
   * @example
   * 10
   */
  minRowCountFluctuationThreshold?: number;
  /**
   * @remarks
   * The data table name.
   * 
   * @example
   * table-123
   */
  name?: string;
  /**
   * @remarks
   * The partition fields.
   * 
   * @example
   * dt
   */
  partitionFields?: string;
  /**
   * @remarks
   * The data table ID.
   * 
   * @example
   * 3
   */
  recallManagementTableId?: string;
  /**
   * @remarks
   * The recall type.
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

