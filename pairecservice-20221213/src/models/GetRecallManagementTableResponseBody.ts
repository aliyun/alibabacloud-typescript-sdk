// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementTableResponseBodyFields extends $dara.Model {
  attributes?: string[];
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * STRING
   */
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

export class GetRecallManagementTableResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @example
   * {"item_id":""}
   */
  config?: string;
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
   * false
   */
  enableDataSizeFluctuationThreshold?: boolean;
  /**
   * @example
   * true
   */
  enableRowCountFluctuationThreshold?: boolean;
  fields?: GetRecallManagementTableResponseBodyFields[];
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
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
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

