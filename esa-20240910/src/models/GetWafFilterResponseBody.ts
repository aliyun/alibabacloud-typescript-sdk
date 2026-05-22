// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafFilterResponseBodyFilterFieldsLogicsValidator extends $dara.Model {
  /**
   * @remarks
   * The error message when the validation fails.
   * 
   * @example
   * Enter a valid expression
   */
  errMsg?: string;
  /**
   * @remarks
   * The length of the value.
   */
  length?: WafQuotaInteger;
  /**
   * @remarks
   * The regular expression pattern of the value, which is used to validate strings.
   * 
   * @example
   * ^example$
   */
  pattern?: string;
  /**
   * @remarks
   * The range of the value, which is used to validate numbers.
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
   * A custom attribute. For example, this parameter can specify whether the value is case-sensitive.
   * 
   * @example
   * 1
   */
  attributes?: number;
  enable?: boolean;
  /**
   * @remarks
   * The type of the value input box. Valid values:
   * 
   * *   select:single
   * *   select:multi
   * *   input:single
   * *   input:multi
   * 
   * @example
   * input:single
   */
  kind?: string;
  minPlan?: string;
  /**
   * @remarks
   * Indicates whether the match result is inverted.
   */
  negative?: boolean;
  /**
   * @remarks
   * The displayed matching characters.
   * 
   * @example
   * Does not equal
   */
  operator?: string;
  /**
   * @remarks
   * The matching characters in the system.
   * 
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @remarks
   * The tip on how to enter a valid value that is required by the rules.
   * 
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * 
   * *   integer
   * *   integer_slice
   * *   string
   * *   string_slice
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The validator, which defines the validation rules for a value.
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
   * The label of the data.
   * 
   * @example
   * China
   */
  label?: string;
  /**
   * @remarks
   * The value of the data.
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
   * The data. This parameter is available only when the value of the Kind parameter is data.
   */
  data?: GetWafFilterResponseBodyFilterFieldsSelectorData[];
  /**
   * @remarks
   * The type of selector. Valid values: data and others.
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
  enable?: boolean;
  /**
   * @remarks
   * The field for matched objects in the system.
   * 
   * @example
   * http.request.headers
   */
  key?: string;
  /**
   * @remarks
   * The label of the matched object.
   * 
   * @example
   * Header
   */
  label?: string;
  /**
   * @remarks
   * The logical conditions.
   */
  logics?: GetWafFilterResponseBodyFilterFieldsLogics[];
  minPlan?: string;
  /**
   * @remarks
   * The selector, which defines how to select a matched object.
   */
  selector?: GetWafFilterResponseBodyFilterFieldsSelector;
  /**
   * @remarks
   * Indicates whether the matched object contains a subfield.
   * 
   * @example
   * true
   */
  sub?: boolean;
  /**
   * @remarks
   * The tip on how to enter a subfield.
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
   * The matched objects and related properties.
   */
  fields?: GetWafFilterResponseBodyFilterFields[];
  /**
   * @remarks
   * The WAF rule category.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The condition for matching incoming requests.
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
   * The returned match conditions.
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

