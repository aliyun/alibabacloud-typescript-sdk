// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableBindDetailResponseBodyResultObjectParams extends $dara.Model {
  /**
   * @remarks
   * The name of the event field.
   * 
   * @example
   * ip
   */
  eventFieldName?: string;
  /**
   * @remarks
   * Indicates whether this parameter is required. Default value: false.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The name of the bound variable.
   * 
   * @example
   * ip
   */
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      eventFieldName: 'eventFieldName',
      required: 'required',
      variableName: 'variableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventFieldName: 'string',
      required: 'boolean',
      variableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableBindDetailResponseBodyResultObjectRelationRules extends $dara.Model {
  /**
   * @remarks
   * The policy ruleId.
   * 
   * @example
   * 104566
   */
  key?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableBindDetailResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Indicates whether modification is allowed. Default value: false.
   * 
   * @example
   * false
   */
  allowModify?: boolean;
  /**
   * @remarks
   * The variable definition ID.
   * 
   * @example
   * 10
   */
  defineId?: number;
  /**
   * @remarks
   * The variable definition title.
   * 
   * @example
   * IP所在地_城市Code
   */
  defineTitle?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
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
   * The bound parameters.
   */
  params?: DescribeVariableBindDetailResponseBodyResultObjectParams[];
  /**
   * @remarks
   * The list of associated policies.
   */
  relationRules?: DescribeVariableBindDetailResponseBodyResultObjectRelationRules[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 变量title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      allowModify: 'allowModify',
      defineId: 'defineId',
      defineTitle: 'defineTitle',
      description: 'description',
      eventCode: 'eventCode',
      id: 'id',
      params: 'params',
      relationRules: 'relationRules',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowModify: 'boolean',
      defineId: 'number',
      defineTitle: 'string',
      description: 'string',
      eventCode: 'string',
      id: 'number',
      params: { 'type': 'array', 'itemType': DescribeVariableBindDetailResponseBodyResultObjectParams },
      relationRules: { 'type': 'array', 'itemType': DescribeVariableBindDetailResponseBodyResultObjectRelationRules },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    if(Array.isArray(this.relationRules)) {
      $dara.Model.validateArray(this.relationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableBindDetailResponseBody extends $dara.Model {
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
  resultObject?: DescribeVariableBindDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVariableBindDetailResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

