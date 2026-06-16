// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllRootVariableResponseBodyResultObjectOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 1000
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
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
   * The variable code.
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 年龄
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * NATIVE
   */
  displayType?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * true
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field sorting order.
   * 
   * @example
   * 1
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter.
   * 
   * @example
   * STRING
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The inputs of the variable.
   * 
   * @example
   * age
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The maximum cross-sectional area of the check box.
   */
  outputThreshold?: DescribeAllRootVariableResponseBodyResultObjectOutputThreshold;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
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

