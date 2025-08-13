// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableListResponseBodyResultObjectActionsOutputThreshold extends $dara.Model {
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectActionsOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectActionsVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectDeviceVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectDeviceVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectExpressionVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectExpressionVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectFavoriteVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectMiddleVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectMiddleVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectModelVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectModelVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectNameListOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectNameListVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctionsVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectNativeVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectNativeVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectQueryVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectQueryVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectSelfVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectSelfVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectSysVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectSysVariablesVariableVelocity;
  xLabel?: string;
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
  maxValue?: number;
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
  code?: string;
  dataDisplay?: string;
  defineId?: string;
  description?: string;
  displayType?: string;
  expressionTitle?: string;
  favoriteFlag?: boolean;
  fieldDetail?: string;
  fieldRank?: number;
  fieldSource?: string;
  fieldType?: string;
  id?: number;
  inputFieldType?: string;
  inputRequired?: string;
  inputs?: string;
  name?: string;
  outlier?: string;
  outputThreshold?: DescribeEventVariableListResponseBodyResultObjectVelocityVariablesOutputThreshold;
  parentName?: string;
  sourceType?: string;
  title?: string;
  type?: string;
  variableVelocity?: DescribeEventVariableListResponseBodyResultObjectVelocityVariablesVariableVelocity;
  xLabel?: string;
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
  actions?: DescribeEventVariableListResponseBodyResultObjectActions[];
  deviceVariables?: DescribeEventVariableListResponseBodyResultObjectDeviceVariables[];
  expressionVariables?: DescribeEventVariableListResponseBodyResultObjectExpressionVariables[];
  favoriteVariables?: DescribeEventVariableListResponseBodyResultObjectFavoriteVariables[];
  middleVariables?: DescribeEventVariableListResponseBodyResultObjectMiddleVariables[];
  modelVariables?: DescribeEventVariableListResponseBodyResultObjectModelVariables[];
  nameList?: DescribeEventVariableListResponseBodyResultObjectNameList[];
  nativeVariableFunctions?: DescribeEventVariableListResponseBodyResultObjectNativeVariableFunctions[];
  nativeVariables?: DescribeEventVariableListResponseBodyResultObjectNativeVariables[];
  queryVariables?: DescribeEventVariableListResponseBodyResultObjectQueryVariables[];
  selfVariables?: DescribeEventVariableListResponseBodyResultObjectSelfVariables[];
  sysVariables?: DescribeEventVariableListResponseBodyResultObjectSysVariables[];
  thirdVariables?: { [key: string]: any };
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
  requestId?: string;
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

