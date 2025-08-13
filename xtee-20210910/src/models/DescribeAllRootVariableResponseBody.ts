// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllRootVariableResponseBodyResultObjectOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * Maximum value
   * 
   * @example
   * 1000
   */
  maxValue?: number;
  /**
   * @remarks
   * Minimum value.
   * 
   * @example
   * 10
   */
  minValue?: number;
  static names(): { [key: string]: string } {
    return {
      maxValue: 'maxValue',
      minValue: 'minValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRootVariableResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Variable code
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * Variable description.
   * 
   * @example
   * 年龄
   */
  description?: string;
  /**
   * @remarks
   * Display type and group label
   * 
   * @example
   * NATIVE
   */
  displayType?: string;
  /**
   * @remarks
   * Favorite flag
   * 
   * @example
   * true
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * Field ranking
   * 
   * @example
   * 1
   */
  fieldRank?: number;
  /**
   * @remarks
   * Field type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * Variable ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * Input field type.
   * 
   * @example
   * STRING
   */
  inputFieldType?: string;
  /**
   * @remarks
   * Variable input.
   * 
   * @example
   * age
   */
  inputs?: string;
  /**
   * @remarks
   * Variable name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Maximum cross-sectional area of the checkbox.
   */
  outputThreshold?: DescribeAllRootVariableResponseBodyResultObjectOutputThreshold;
  /**
   * @remarks
   * Data source
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      displayType: 'displayType',
      favoriteFlag: 'favoriteFlag',
      fieldRank: 'fieldRank',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputs: 'inputs',
      name: 'name',
      outputThreshold: 'outputThreshold',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      displayType: 'string',
      favoriteFlag: 'boolean',
      fieldRank: 'number',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputs: 'string',
      name: 'string',
      outputThreshold: DescribeAllRootVariableResponseBodyResultObjectOutputThreshold,
      sourceType: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRootVariableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeAllRootVariableResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeAllRootVariableResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

