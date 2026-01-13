// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementTableRequestFields extends $dara.Model {
  attributes?: string[];
  /**
   * @example
   * age
   */
  name?: string;
  type?: string;
  /**
   * @example
   * 32
   */
  vectorDimension?: number;
  /**
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
   * @example
   * {"":""}
   */
  config?: string;
  /**
   * @example
   * MaxcomputeAndApiApi
   */
  dataSource?: string;
  /**
   * @example
   * this is a test table
   */
  description?: string;
  /**
   * @example
   * true
   */
  enableDataSizeFluctuationThreshold?: boolean;
  /**
   * @example
   * true
   */
  enableRowCountFluctuationThreshold?: boolean;
  fields?: CreateRecallManagementTableRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @example
   * 100
   */
  maxDataSizeFluctuationThreshold?: number;
  /**
   * @example
   * 100
   */
  maxRowCountFluctuationThreshold?: number;
  /**
   * @example
   * test
   */
  maxcomputeProjectName?: string;
  /**
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
   * 10
   */
  minDataSizeFluctuationThreshold?: number;
  /**
   * @example
   * 10
   */
  minRowCountFluctuationThreshold?: number;
  /**
   * @example
   * table-123
   */
  name?: string;
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

