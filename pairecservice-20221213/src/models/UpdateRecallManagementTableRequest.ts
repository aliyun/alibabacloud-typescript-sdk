// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecallManagementTableRequestFields extends $dara.Model {
  /**
   * @remarks
   * Specifies the role of the field. Valid values:
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
   * The field name.
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

export class UpdateRecallManagementTableRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the data size fluctuation threshold.
   * 
   * @example
   * true
   */
  enableDataSizeFluctuationThreshold?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the row count fluctuation threshold.
   * 
   * @example
   * true
   */
  enableRowCountFluctuationThreshold?: boolean;
  /**
   * @remarks
   * A list of fields.
   */
  fields?: UpdateRecallManagementTableRequestFields;
  /**
   * @remarks
   * The version ID of the table.
   * 
   * @example
   * 20250701
   */
  indexVersionId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum value for the data size fluctuation threshold.
   * 
   * @example
   * 100
   */
  maxDataSizeFluctuationThreshold?: number;
  /**
   * @remarks
   * The maximum value for the row count fluctuation threshold.
   * 
   * @example
   * 100
   */
  maxRowCountFluctuationThreshold?: number;
  /**
   * @remarks
   * The minimum value for the data size fluctuation threshold.
   * 
   * @example
   * 10
   */
  minDataSizeFluctuationThreshold?: number;
  /**
   * @remarks
   * The minimum value for the row count fluctuation threshold.
   * 
   * @example
   * 10
   */
  minRowCountFluctuationThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enableDataSizeFluctuationThreshold: 'EnableDataSizeFluctuationThreshold',
      enableRowCountFluctuationThreshold: 'EnableRowCountFluctuationThreshold',
      fields: 'Fields',
      indexVersionId: 'IndexVersionId',
      instanceId: 'InstanceId',
      maxDataSizeFluctuationThreshold: 'MaxDataSizeFluctuationThreshold',
      maxRowCountFluctuationThreshold: 'MaxRowCountFluctuationThreshold',
      minDataSizeFluctuationThreshold: 'MinDataSizeFluctuationThreshold',
      minRowCountFluctuationThreshold: 'MinRowCountFluctuationThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDataSizeFluctuationThreshold: 'boolean',
      enableRowCountFluctuationThreshold: 'boolean',
      fields: UpdateRecallManagementTableRequestFields,
      indexVersionId: 'string',
      instanceId: 'string',
      maxDataSizeFluctuationThreshold: 'number',
      maxRowCountFluctuationThreshold: 'number',
      minDataSizeFluctuationThreshold: 'number',
      minRowCountFluctuationThreshold: 'number',
    };
  }

  validate() {
    if(this.fields && typeof (this.fields as any).validate === 'function') {
      (this.fields as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

