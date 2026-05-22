// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafFilterResponseBodyFilterFieldsLogicsValidator extends $dara.Model {
  /**
   * @example
   * Enter a valid expression
   */
  errMsg?: string;
  length?: WafQuotaInteger;
  /**
   * @example
   * ^example$
   */
  pattern?: string;
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
   * @example
   * 1
   */
  attributes?: number;
  enable?: boolean;
  /**
   * @example
   * input:single
   */
  kind?: string;
  minPlan?: string;
  negative?: boolean;
  /**
   * @example
   * Does not equal
   */
  operator?: string;
  /**
   * @example
   * eq
   */
  symbol?: string;
  /**
   * @example
   * e.g. image/jpeg
   */
  tip?: string;
  /**
   * @example
   * string
   */
  type?: string;
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
   * @example
   * China
   */
  label?: string;
  /**
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
  data?: GetWafFilterResponseBodyFilterFieldsSelectorData[];
  /**
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
   * @example
   * http.request.headers
   */
  key?: string;
  /**
   * @example
   * Header
   */
  label?: string;
  logics?: GetWafFilterResponseBodyFilterFieldsLogics[];
  minPlan?: string;
  selector?: GetWafFilterResponseBodyFilterFieldsSelector;
  sub?: boolean;
  /**
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
  fields?: GetWafFilterResponseBodyFilterFields[];
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * characteristics
   */
  target?: string;
  /**
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
  filter?: GetWafFilterResponseBodyFilter;
  /**
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

