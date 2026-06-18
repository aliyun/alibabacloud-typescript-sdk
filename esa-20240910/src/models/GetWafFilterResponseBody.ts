// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafFilterResponseBodyFilterFieldsLogicsValidator extends $dara.Model {
  /**
   * @remarks
   * The error message returned when validation fails.
   * 
   * @example
   * Enter a valid expression
   */
  errMsg?: string;
  /**
   * @remarks
   * The length limit for the value.
   */
  length?: WafQuotaInteger;
  /**
   * @remarks
   * The regular expression pattern for the value.
   * 
   * @example
   * ^example$
   */
  pattern?: string;
  /**
   * @remarks
   * The value range for numeric validation.
   */
  range?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      length: 'Length',
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      length: WafQuotaInteger,
      pattern: 'string',
      range: WafQuotaInteger,
    };
  }

  validate() {
    if(this.length && typeof (this.length as any).validate === 'function') {
      (this.length as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFieldsLogics extends $dara.Model {
  /**
   * @remarks
   * Configurable attributes, such as case sensitivity.
   * 
   * @example
   * 1
   */
  attributes?: number;
  /**
   * @remarks
   * Indicates whether the current plan supports this operator.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The input type for the value. Valid values:
   * 
   * - `select:single`: A single-select input.
   * 
   * - `select:multi`: A multi-select input.
   * 
   * - `input:single`: A single-value text input.
   * 
   * - `input:multi`: A multi-value text input.
   * 
   * @example
   * input:single
   */
  kind?: string;
  /**
   * @remarks
   * The minimum plan that supports this operator, provided the current plan does not.
   * 
   * @example
   * high
   */
  minPlan?: string;
  /**
   * @remarks
   * Indicates whether to negate the match result.
   */
  negative?: boolean;
  /**
   * @remarks
   * The label for the operator.
   * 
   * @example
   * Does not equal
   */
  operator?: string;
  /**
   * @remarks
   * The internal identifier for the operator.
   * 
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @remarks
   * A hint for entering a valid value.
   * 
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * 
   * - `integer`: An integer.
   * 
   * - `integer_slice`: An integer array.
   * 
   * - `string`: A string.
   * 
   * - `string_slice`: A string array.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The validator, which defines validation rules for the value.
   */
  validator?: GetWafFilterResponseBodyFilterFieldsLogicsValidator;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      enable: 'Enable',
      kind: 'Kind',
      minPlan: 'MinPlan',
      negative: 'Negative',
      operator: 'Operator',
      symbol: 'Symbol',
      tip: 'Tip',
      type: 'Type',
      validator: 'Validator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'number',
      enable: 'boolean',
      kind: 'string',
      minPlan: 'string',
      negative: 'boolean',
      operator: 'string',
      symbol: 'string',
      tip: 'string',
      type: 'string',
      validator: GetWafFilterResponseBodyFilterFieldsLogicsValidator,
    };
  }

  validate() {
    if(this.validator && typeof (this.validator as any).validate === 'function') {
      (this.validator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFieldsSelectorData extends $dara.Model {
  /**
   * @remarks
   * The label for the data option.
   * 
   * @example
   * China
   */
  label?: string;
  /**
   * @remarks
   * The value of the data option.
   * 
   * @example
   * CN
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class GetWafFilterResponseBodyFilterFieldsSelector extends $dara.Model {
  /**
   * @remarks
   * A list of data options available when the selector `Kind` is `data`.
   */
  data?: GetWafFilterResponseBodyFilterFieldsSelectorData[];
  /**
   * @remarks
   * The selector type, which indicates whether it targets data items or other entities.
   * 
   * @example
   * data
   */
  kind?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      kind: 'Kind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsSelectorData },
      kind: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilterFields extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current plan supports this match object.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The internal key for the match object.
   * 
   * @example
   * http.request.headers
   */
  key?: string;
  /**
   * @remarks
   * The label for the match object.
   * 
   * @example
   * Header
   */
  label?: string;
  /**
   * @remarks
   * A list of logical operators that define the matching conditions.
   */
  logics?: GetWafFilterResponseBodyFilterFieldsLogics[];
  /**
   * @remarks
   * The minimum plan that supports this match object, provided the current plan does not.
   * 
   * @example
   * high
   */
  minPlan?: string;
  /**
   * @remarks
   * The selector, which defines how to select the match object.
   */
  selector?: GetWafFilterResponseBodyFilterFieldsSelector;
  /**
   * @remarks
   * Indicates whether the match object includes subfields.
   * 
   * @example
   * true
   */
  sub?: boolean;
  /**
   * @remarks
   * A hint for entering the subfield value.
   * 
   * @example
   * e.g. Content-Type
   */
  subTip?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      key: 'Key',
      label: 'Label',
      logics: 'Logics',
      minPlan: 'MinPlan',
      selector: 'Selector',
      sub: 'Sub',
      subTip: 'SubTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      key: 'string',
      label: 'string',
      logics: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsLogics },
      minPlan: 'string',
      selector: GetWafFilterResponseBodyFilterFieldsSelector,
      sub: 'boolean',
      subTip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logics)) {
      $dara.Model.validateArray(this.logics);
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafFilterResponseBodyFilter extends $dara.Model {
  /**
   * @remarks
   * A list of match objects and their properties.
   */
  fields?: GetWafFilterResponseBodyFilterFields[];
  /**
   * @remarks
   * The phase at which the WAF processes requests.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The target of the matching engine.
   * 
   * @example
   * characteristics
   */
  target?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * http_custom_cc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      phase: 'Phase',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFields },
      phase: 'string',
      target: 'string',
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

export class GetWafFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned matching engine configuration.
   */
  filter?: GetWafFilterResponseBodyFilter;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: GetWafFilterResponseBodyFilter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

