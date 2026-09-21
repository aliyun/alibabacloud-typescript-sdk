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
   * The length limit of the value.
   */
  length?: WafQuotaInteger;
  /**
   * @remarks
   * The regular expression pattern for the value, used for string validation.
   * 
   * @example
   * ^example$
   */
  pattern?: string;
  /**
   * @remarks
   * The numeric range of the value, used for number validation.
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
   * The configurable attributes, such as whether the match is case-sensitive.
   * 
   * @example
   * 1
   */
  attributes?: number;
  /**
   * @remarks
   * Indicates whether the current plan supports this match operator.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the value input field. Valid values:
   * * select:single: single-select input field
   * * select:multi: multi-select input field
   * * input:single: single input field
   * * input:multi: multi input field
   * 
   * @example
   * input:single
   */
  kind?: string;
  /**
   * @remarks
   * The minimum plan that supports this match operator, displayed when the current plan does not support it.
   * 
   * @example
   * high
   */
  minPlan?: string;
  /**
   * @remarks
   * Indicates whether the match result is negated.
   */
  negative?: boolean;
  /**
   * @remarks
   * The display label of the match operator.
   * 
   * @example
   * Does not equal
   */
  operator?: string;
  /**
   * @remarks
   * The parameter of the match operator used internally by the system.
   * 
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @remarks
   * The input hint that helps users provide valid values required by the rule.
   * 
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * * integer: integer
   * * integer_slice: integer array
   * * string: string
   * * string_slice: string array
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The validator object that defines the validation rules for values.
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
   * The display label of the available data.
   * 
   * @example
   * China
   */
  label?: string;
  /**
   * @remarks
   * The parameter value of the available data.
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
   * The list of available data when the selector kind is data.
   */
  data?: GetWafFilterResponseBodyFilterFieldsSelectorData[];
  /**
   * @remarks
   * The kind of the selector, such as whether it is used for selecting data items or other purposes.
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

export class GetWafFilterResponseBodyFilterFieldsSubsLogicsValidator extends $dara.Model {
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
   * The length limit of the value.
   */
  length?: WafQuotaInteger;
  /**
   * @remarks
   * The regular expression pattern for the value, used for string validation.
   * 
   * @example
   * ^example$
   */
  pattern?: string;
  /**
   * @remarks
   * The numeric range of the value, used for number validation.
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

export class GetWafFilterResponseBodyFilterFieldsSubsLogics extends $dara.Model {
  /**
   * @remarks
   * The field attributes.
   * 
   * @example
   * 0
   */
  attributes?: number;
  /**
   * @remarks
   * Indicates whether the current plan supports this match operator.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the value input field. Valid values:
   * * select:single: single-select input field
   * * select:multi: multi-select input field
   * * input:single: single input field
   * * input:multi: multi input field
   * 
   * @example
   * select:single
   */
  kind?: string;
  /**
   * @remarks
   * The minimum plan that supports this match operator, displayed when the current plan does not support it.
   * 
   * @example
   * high
   */
  minPlan?: string;
  /**
   * @remarks
   * Indicates whether the match result is negated.
   * 
   * @example
   * false
   */
  negative?: boolean;
  /**
   * @remarks
   * The display label of the match operator.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The parameter of the match operator used internally by the system.
   * 
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @remarks
   * The input hint that helps users provide valid values required by the rule.
   * 
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * * integer: integer
   * * integer_slice: integer array
   * * string: string
   * * string_slice: string array
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The validator object that defines the validation rules for values.
   */
  validator?: GetWafFilterResponseBodyFilterFieldsSubsLogicsValidator;
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
      validator: GetWafFilterResponseBodyFilterFieldsSubsLogicsValidator,
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

export class GetWafFilterResponseBodyFilterFieldsSubs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current plan supports this match object.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The parameter of the sub-item match object.
   * 
   * @example
   * ali.websdk.umid
   */
  key?: string;
  /**
   * @remarks
   * The display label of the sub-item match object.
   * 
   * @example
   * Web UMID
   */
  label?: string;
  /**
   * @remarks
   * The list of logical operator properties applicable to the sub-item (same structure as the parent Logics).
   */
  logics?: GetWafFilterResponseBodyFilterFieldsSubsLogics[];
  /**
   * @remarks
   * The minimum plan that supports this match object, displayed when the current plan does not support it.
   * 
   * @example
   * high
   */
  minPlan?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      key: 'Key',
      label: 'Label',
      logics: 'Logics',
      minPlan: 'MinPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      key: 'string',
      label: 'string',
      logics: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsSubsLogics },
      minPlan: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logics)) {
      $dara.Model.validateArray(this.logics);
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
   * The parameter of the match object used internally by the system.
   * 
   * @example
   * http.request.headers
   */
  key?: string;
  /**
   * @remarks
   * The display label of the match object.
   * 
   * @example
   * Header
   */
  label?: string;
  /**
   * @remarks
   * The list of logical operator properties that define the logical conditions used for matching.
   */
  logics?: GetWafFilterResponseBodyFilterFieldsLogics[];
  /**
   * @remarks
   * The minimum plan that supports this match object, displayed when the current plan does not support it.
   * 
   * @example
   * high
   */
  minPlan?: string;
  /**
   * @remarks
   * The selector object that defines how to select the match object.
   */
  selector?: GetWafFilterResponseBodyFilterFieldsSelector;
  /**
   * @remarks
   * Indicates whether the match object contains subfields.
   * 
   * @example
   * true
   */
  sub?: boolean;
  /**
   * @remarks
   * The hint provided to users about how to enter subfields.
   * 
   * @example
   * e.g. Content-Type
   */
  subTip?: string;
  /**
   * @remarks
   * The enumerated sub-item list (dropdown subfields for grouped fields such as ali.websdk). Top-level match objects populate this list. Sub-items that are flat fields can be used directly as the left-hand side of an expression.
   */
  subs?: GetWafFilterResponseBodyFilterFieldsSubs[];
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
      subs: 'Subs',
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
      subs: { 'type': 'array', 'itemType': GetWafFilterResponseBodyFilterFieldsSubs },
    };
  }

  validate() {
    if(Array.isArray(this.logics)) {
      $dara.Model.validateArray(this.logics);
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    if(Array.isArray(this.subs)) {
      $dara.Model.validateArray(this.subs);
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
   * The list that describes match objects and their properties.
   */
  fields?: GetWafFilterResponseBodyFilterFields[];
  /**
   * @remarks
   * The phase in which WAF processes the request.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The target value of the matching engine.
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
   * The matching engine configuration information returned.
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

