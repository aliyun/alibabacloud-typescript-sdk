// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableListResponseBodyResultObjectActionsOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectActionsVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectActions extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * deAddResult
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 决策结果
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * ACTION
   */
  displayType?: string;
  /**
   * @remarks
   * The expression display. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The field type. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3144
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
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * __addDeResult__
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectActionsOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * 决策结果
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * ACTION
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectActionsVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectActionsOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectActionsVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectDeviceVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectDeviceVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectDeviceVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * queryPhoneSimulatorInfo(deviceToken)?.deviceName
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 设备信息-设备名称
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * DEVICE
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
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
   * The primary key ID.
   * 
   * @example
   * 41
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input of the variable. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * __device_name__
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectDeviceVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * 设备信息-设备名称-deviceName
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * DEVICE
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectDeviceVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectDeviceVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectDeviceVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectExpressionVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectExpressionVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectExpressionVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * deInvokeSelfVariable(390397)
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 获取手机号前7位
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * EXPRESSION
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression.
   * 
   * @example
   * @testaaa +1
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The variable input type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3148
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters, separated by commas if multiple. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * ex_w2yIClHCc150
   */
  name?: string;
  /**
   * @remarks
   * The outlier value.
   * 
   * @example
   * -1
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectExpressionVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * 获取手机号前7位
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectExpressionVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectExpressionVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectExpressionVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectFavoriteVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * deFunctionProcess(ip,\\"isIp\\")
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID.
   * 
   * @example
   * 16
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 判断是否符合IPv4标准
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * SYSTEM_BIND
   */
  displayType?: string;
  /**
   * @remarks
   * The expression display value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * BOOLEAN
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 34
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters, separated by commas if multiple. Some variables do not have this field.
   * 
   * @example
   * ip
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * __isIpAddressV4__
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * IP是否符合IPV4格式
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * SYSTEM_BIND
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectMiddleVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 0
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

export class DescribeEventVariableListResponseBodyResultObjectMiddleVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The ID value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectMiddleVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * mid
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID.
   * 
   * @example
   * register
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * MIDDLE
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The variable source.
   * 
   * @example
   * DEFAULT
   */
  fieldSource?: string;
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
   * The primary key ID.
   * 
   * @example
   * 49
   */
  id?: number;
  /**
   * @remarks
   * The input field type, which indicates the input parameter type and is mainly used for function classification. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input of the variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * mid
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectMiddleVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * midVaribale
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * MIDDLE
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectMiddleVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectMiddleVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectMiddleVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectModelVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectModelVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectModelVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * getAIData(model)
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * BL_t_show
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * MODEL
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * DOUBLE
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID of the model variable.
   * 
   * @example
   * 43
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters, separated by commas if multiple. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * mo_qbbyf33o66f2
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectModelVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * BL_t_show
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * MODEL
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectModelVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectModelVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectModelVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectNameListOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectNameListVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectNameList extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * nl_UN8otElLb490
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not currently returned.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * NAME_LIST
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The field type. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 34
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * nl_UN8otElLb490
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectNameListOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not currently returned.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * 白名单
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * NAME_LIST
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectNameListVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectNameListOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectNameListVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 0
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

export class DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctions extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * getHourOfTimestamp({data})
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 时间戳，可以是秒或者毫秒
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * FUNC
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The variable return value type.
   * 
   * @example
   * LONG
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 93
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter.
   * 
   * @example
   * DATE
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input fields. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * __getHourOfTimestamp__
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * The variable title.
   * 
   * @example
   * 根据时间戳获取小时
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * FUNC
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectNativeVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectNativeVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV).
   * 
   * @example
   * 无
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectNativeVariables extends $dara.Model {
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
   * The data distribution display in JSON format.
   * 
   * @example
   * {}
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The associated variable definition ID.
   * 
   * @example
   * register
   */
  defineId?: string;
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
   * The display type and group label.
   * 
   * @example
   * NATIVE
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression.
   * 
   * @example
   * 无
   */
  expressionTitle?: string;
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
   * The field pool field details.
   * 
   * @example
   * 无
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 1
   */
  fieldRank?: number;
  /**
   * @remarks
   * The variable source.
   * 
   * @example
   * DEFINE
   */
  fieldSource?: string;
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
   * 223
   */
  id?: number;
  /**
   * @remarks
   * The input field type, which indicates the input parameter type and is mainly used for function classification.
   * 
   * @example
   * STRING
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter.
   * 
   * @example
   * 无
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input of the variable. This field is not returned for event fields.
   * 
   * @example
   * 无
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
   * The outlier value.
   * 
   * @example
   * 无
   */
  outlier?: string;
  /**
   * @remarks
   * The output score threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectNativeVariablesOutputThreshold;
  /**
   * @remarks
   * The parent name.
   * 
   * @example
   * parentName
   */
  parentName?: string;
  /**
   * @remarks
   * The variable source type.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * The variable name.
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
  /**
   * @remarks
   * The variable metric information.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectNativeVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label.
   * 
   * @example
   * x
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label.
   * 
   * @example
   * y
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectNativeVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectNativeVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectQueryVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectQueryVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectQueryVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * deInvokeQueryVariable(376773)
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 年龄计算
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * QUERY_EXPRESSION
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * SELECT  AVG( $source )\\nFROM testCase\\nWHERE  $age > 0
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
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
   * The primary key ID of the query variable.
   * 
   * @example
   * 3148
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters, separated by commas if multiple. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * ex_qWtKgCox350f
   */
  name?: string;
  /**
   * @remarks
   * The outlier value.
   * 
   * @example
   * SYS_ERROR
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectQueryVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * DATA_SOURCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 年龄计算
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * QUERY_EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectQueryVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectQueryVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectQueryVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectSelfVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectSelfVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectSelfVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * deReadVelocity(hitRules,\\"dUd5ioJ8014\\",1,\\"MO\\",0,true,\\"SUM\\")
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is returned only for custom system variables.
   * 
   * @example
   * 49
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 变量的描述信息
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * SELF_BIND
   */
  displayType?: string;
  /**
   * @remarks
   * The expression name.
   * 
   * @example
   * @IP地址
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
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
   * 3174
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters. This field is returned only for custom system variables.
   * 
   * @example
   * ip
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * ex_isvspbF2c7ac
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is returned when the variable is a custom variable (type=EXPRESSION).
   * 
   * @example
   * -1
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectSelfVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not currently returned.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * 获取手机号前七位
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectSelfVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectSelfVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectSelfVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectSysVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectSysVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectSysVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * parseIpV2(ip)?.cityId
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The bound variable definition ID.
   * 
   * @example
   * 2488
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 通过IP地址库解析IP所在的城市Code，例如，输入“42.120.74.211”，经过该变量运算，输出“330100”。
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * SYSTEM_BIND
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
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
   * 3151
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The variable value input.
   * 
   * @example
   * ip
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * __ipLocationCityCode__
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectSysVariablesOutputThreshold;
  /**
   * @remarks
   * The parent name.
   * 
   * @example
   * 无
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
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
   * IP所在地_城市Code
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * SYSTEM_BIND
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectSysVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectSysVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectSysVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectVelocityVariablesOutputThreshold extends $dara.Model {
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
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

export class DescribeEventVariableListResponseBodyResultObjectVelocityVariablesVariableVelocity extends $dara.Model {
  /**
   * @remarks
   * The information value (IV). This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObjectVelocityVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * deReadVelocity(userId,\\"hFsEFUEe88a\\",1,\\"H\\",0,true,\\"COUNT\\")
   */
  code?: string;
  /**
   * @remarks
   * The data distribution display in JSON format. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The variable definition ID. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  defineId?: string;
  /**
   * @remarks
   * The variable description.
   * 
   * @example
   * 累计用户省份次数。
   */
  description?: string;
  /**
   * @remarks
   * The display type and group label.
   * 
   * @example
   * SELF_VELOCITY
   */
  displayType?: string;
  /**
   * @remarks
   * The display value of the calculation expression. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  expressionTitle?: string;
  /**
   * @remarks
   * The favorite flag.
   * 
   * @example
   * false
   */
  favoriteFlag?: boolean;
  /**
   * @remarks
   * The field pool field details. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldDetail?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 0
   */
  fieldRank?: number;
  /**
   * @remarks
   * The field source. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  fieldSource?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * DOUBLE
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3148
   */
  id?: number;
  /**
   * @remarks
   * The input type of the parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputFieldType?: string;
  /**
   * @remarks
   * The required parameter. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters, separated by commas if multiple. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  inputs?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * hFsEFUEe88a
   */
  name?: string;
  /**
   * @remarks
   * The outlier value. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  outlier?: string;
  /**
   * @remarks
   * The output value threshold.
   */
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectVelocityVariablesOutputThreshold;
  /**
   * @remarks
   * The parent node. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  parentName?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * SAF_SELF
   */
  sourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 累计用户省份次数
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
   * 
   * @example
   * SELF_VELOCITY
   */
  type?: string;
  /**
   * @remarks
   * The variable metric information. This field is not returned for this type of variable.
   */
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectVelocityVariablesVariableVelocity;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  xLabel?: string;
  /**
   * @remarks
   * The X-axis label. This field is not returned for this type of variable.
   * 
   * @example
   * This type does not have this field
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataDisplay: 'dataDisplay',
      defineId: 'defineId',
      description: 'description',
      displayType: 'displayType',
      expressionTitle: 'expressionTitle',
      favoriteFlag: 'favoriteFlag',
      fieldDetail: 'fieldDetail',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      id: 'id',
      inputFieldType: 'inputFieldType',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      name: 'name',
      outlier: 'outlier',
      outputThreshold: 'outputThreshold',
      parentName: 'parentName',
      sourceType: 'sourceType',
      title: 'title',
      type: 'type',
      variableVelocity: 'variableVelocity',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDisplay: 'string',
      defineId: 'string',
      description: 'string',
      displayType: 'string',
      expressionTitle: 'string',
      favoriteFlag: 'boolean',
      fieldDetail: 'string',
      fieldRank: 'number',
      fieldSource: 'string',
      fieldType: 'string',
      id: 'number',
      inputFieldType: 'string',
      inputRequired: 'string',
      inputs: 'string',
      name: 'string',
      outlier: 'string',
      outputThreshold: DescribeEventVariableListResponseBodyResultObjectVelocityVariablesOutputThreshold,
      parentName: 'string',
      sourceType: 'string',
      title: 'string',
      type: 'string',
      variableVelocity: DescribeEventVariableListResponseBodyResultObjectVelocityVariablesVariableVelocity,
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(this.outputThreshold && typeof (this.outputThreshold as any).validate === 'function') {
      (this.outputThreshold as any).validate();
    }
    if(this.variableVelocity && typeof (this.variableVelocity as any).validate === 'function') {
      (this.variableVelocity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The action variables.
   */
  actions?: DescribeEventVariableListResponseBodyResultObjectActions[];
  /**
   * @remarks
   * The device variables.
   */
  deviceVariables?: DescribeEventVariableListResponseBodyResultObjectDeviceVariables[];
  /**
   * @remarks
   * The custom variables.
   */
  expressionVariables?: DescribeEventVariableListResponseBodyResultObjectExpressionVariables[];
  /**
   * @remarks
   * The favorite variables.
   */
  favoriteVariables?: DescribeEventVariableListResponseBodyResultObjectFavoriteVariables[];
  /**
   * @remarks
   * The intermediate variable response object.
   */
  middleVariables?: DescribeEventVariableListResponseBodyResultObjectMiddleVariables[];
  /**
   * @remarks
   * The model variables.
   */
  modelVariables?: DescribeEventVariableListResponseBodyResultObjectModelVariables[];
  /**
   * @remarks
   * The list variables.
   */
  nameList?: DescribeEventVariableListResponseBodyResultObjectNameList[];
  /**
   * @remarks
   * The list of available functions for native variables.
   */
  nativeVariableFunctions?: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctions[];
  /**
   * @remarks
   * The list of event fields.
   */
  nativeVariables?: DescribeEventVariableListResponseBodyResultObjectNativeVariables[];
  /**
   * @remarks
   * The custom query variables.
   */
  queryVariables?: DescribeEventVariableListResponseBodyResultObjectQueryVariables[];
  /**
   * @remarks
   * The custom variables (custom variables, cumulative variables, and custom system variables).
   */
  selfVariables?: DescribeEventVariableListResponseBodyResultObjectSelfVariables[];
  /**
   * @remarks
   * The system variables.
   */
  sysVariables?: DescribeEventVariableListResponseBodyResultObjectSysVariables[];
  /**
   * @remarks
   * The other variables.
   * 
   * @example
   * {}
   */
  thirdVariables?: { [key: string]: any };
  /**
   * @remarks
   * The custom cumulative variables.
   */
  velocityVariables?: DescribeEventVariableListResponseBodyResultObjectVelocityVariables[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      deviceVariables: 'deviceVariables',
      expressionVariables: 'expressionVariables',
      favoriteVariables: 'favoriteVariables',
      middleVariables: 'middleVariables',
      modelVariables: 'modelVariables',
      nameList: 'nameList',
      nativeVariableFunctions: 'nativeVariableFunctions',
      nativeVariables: 'nativeVariables',
      queryVariables: 'queryVariables',
      selfVariables: 'selfVariables',
      sysVariables: 'sysVariables',
      thirdVariables: 'thirdVariables',
      velocityVariables: 'velocityVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectActions },
      deviceVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectDeviceVariables },
      expressionVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectExpressionVariables },
      favoriteVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectFavoriteVariables },
      middleVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectMiddleVariables },
      modelVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectModelVariables },
      nameList: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectNameList },
      nativeVariableFunctions: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctions },
      nativeVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectNativeVariables },
      queryVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectQueryVariables },
      selfVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectSelfVariables },
      sysVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectSysVariables },
      thirdVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      velocityVariables: { 'type': 'array', 'itemType': DescribeEventVariableListResponseBodyResultObjectVelocityVariables },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.deviceVariables)) {
      $dara.Model.validateArray(this.deviceVariables);
    }
    if(Array.isArray(this.expressionVariables)) {
      $dara.Model.validateArray(this.expressionVariables);
    }
    if(Array.isArray(this.favoriteVariables)) {
      $dara.Model.validateArray(this.favoriteVariables);
    }
    if(Array.isArray(this.middleVariables)) {
      $dara.Model.validateArray(this.middleVariables);
    }
    if(Array.isArray(this.modelVariables)) {
      $dara.Model.validateArray(this.modelVariables);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.nativeVariableFunctions)) {
      $dara.Model.validateArray(this.nativeVariableFunctions);
    }
    if(Array.isArray(this.nativeVariables)) {
      $dara.Model.validateArray(this.nativeVariables);
    }
    if(Array.isArray(this.queryVariables)) {
      $dara.Model.validateArray(this.queryVariables);
    }
    if(Array.isArray(this.selfVariables)) {
      $dara.Model.validateArray(this.selfVariables);
    }
    if(Array.isArray(this.sysVariables)) {
      $dara.Model.validateArray(this.sysVariables);
    }
    if(this.thirdVariables) {
      $dara.Model.validateMap(this.thirdVariables);
    }
    if(Array.isArray(this.velocityVariables)) {
      $dara.Model.validateArray(this.velocityVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableListResponseBody extends $dara.Model {
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
   * The response object.
   */
  resultObject?: DescribeEventVariableListResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeEventVariableListResponseBodyResultObject,
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

