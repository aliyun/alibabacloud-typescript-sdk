// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementTableRequestFields extends $dara.Model {
  /**
   * @remarks
   * The attributes of the field. Valid values:
   * 
   * - `Primary`: The primary key field.
   * 
   * - `Item`: The item field.
   * 
   * - `Score`: The recall score field.
   * 
   * - `Vector`: The vector field.
   * 
   * - `Index`: The index field.
   */
  attributes?: string[];
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * STRING(全大写)
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

export class CreateRecallManagementTableRequest extends $dara.Model {
  /**
   * @remarks
   * Additional settings for the table.
   * 
   * @example
   * {"":""}
   */
  config?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * MaxcomputeAndApiApi
   */
  dataSource?: string;
  /**
   * @remarks
   * **The description of the table.**
   * 
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @remarks
   * Whether to enable the data size fluctuation threshold.
   * 
   * @example
   * true
   */
  enableDataSizeFluctuationThreshold?: boolean;
  /**
   * @remarks
   * Whether to enable the row count fluctuation threshold.
   * 
   * @example
   * true
   */
  enableRowCountFluctuationThreshold?: boolean;
  /**
   * @remarks
   * The list of fields.
   */
  fields?: CreateRecallManagementTableRequestFields[];
  /**
   * @remarks
   * **The instance ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
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
   * The MaxCompute project.
   * 
   * @example
   * test
   */
  maxcomputeProjectName?: string;
  /**
   * @remarks
   * **The schema in MaxCompute.**
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
   * **The name of the table.**
   * 
   * @example
   * table-123
   */
  name?: string;
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
   * **The table type.**
   * 
   * @example
   * Recall
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      dataSource: 'DataSource',
      description: 'Description',
      enableDataSizeFluctuationThreshold: 'EnableDataSizeFluctuationThreshold',
      enableRowCountFluctuationThreshold: 'EnableRowCountFluctuationThreshold',
      fields: 'Fields',
      instanceId: 'InstanceId',
      maxDataSizeFluctuationThreshold: 'MaxDataSizeFluctuationThreshold',
      maxRowCountFluctuationThreshold: 'MaxRowCountFluctuationThreshold',
      maxcomputeProjectName: 'MaxcomputeProjectName',
      maxcomputeSchema: 'MaxcomputeSchema',
      maxcomputeTableName: 'MaxcomputeTableName',
      minDataSizeFluctuationThreshold: 'MinDataSizeFluctuationThreshold',
      minRowCountFluctuationThreshold: 'MinRowCountFluctuationThreshold',
      name: 'Name',
      recallType: 'RecallType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      dataSource: 'string',
      description: 'string',
      enableDataSizeFluctuationThreshold: 'boolean',
      enableRowCountFluctuationThreshold: 'boolean',
      fields: { 'type': 'array', 'itemType': CreateRecallManagementTableRequestFields },
      instanceId: 'string',
      maxDataSizeFluctuationThreshold: 'number',
      maxRowCountFluctuationThreshold: 'number',
      maxcomputeProjectName: 'string',
      maxcomputeSchema: 'string',
      maxcomputeTableName: 'string',
      minDataSizeFluctuationThreshold: 'number',
      minRowCountFluctuationThreshold: 'number',
      name: 'string',
      recallType: 'string',
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

