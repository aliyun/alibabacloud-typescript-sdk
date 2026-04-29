// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecallManagementTableRequestFields extends $dara.Model {
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

export class UpdateRecallManagementTableRequest extends $dara.Model {
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
  fields?: UpdateRecallManagementTableRequestFields;
  /**
   * @example
   * 20250701
   */
  indexVersionId?: string;
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
   * 10
   */
  minDataSizeFluctuationThreshold?: number;
  /**
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

