// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbolRegexp extends $dara.Model {
  /**
   * @remarks
   * The error message returned when no items match the regular expression.
   * 
   * @example
   * Specify this field.
   */
  errMsg?: string;
  /**
   * @remarks
   * The regular expression.
   * 
   * @example
   * ^\\S+$
   */
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbol extends $dara.Model {
  /**
   * @remarks
   * The configurable attributes, which are bit-field variables that are shown in the following list.\\
   * For example, 1(00000001) indicates that case sensitivity can be enabled and stream match cannot be enabled, and 3(00000011) indicates that case sensitivity and stream match can be enabled.
   * 
   * *   Bit (low to high) - Description
   * *   1 - Case sensitivity
   * *   2 - Stream match
   * 
   * @example
   * 1
   */
  attributes?: number;
  /**
   * @remarks
   * The logical symbol that is displayed in the Dynamic Content Delivery Network (DCDN) console.
   * 
   * @example
   * Equal to one of multiple values.
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of match items that can be returned. The value of this parameter varies based on the value of the Type parameter. Valid values:
   * 
   * *   If **multi** is returned for the Type parameter, the value of this parameter indicates the maximum number of match items.
   * *   If **single** is returned for the Type parameter, the value of this parameter is 1.
   * *   If **none** is returned for the Type parameter, the value of this parameter is 0.
   * 
   * @example
   * 50
   */
  maxLength?: number;
  /**
   * @remarks
   * The information about the regular expression.
   */
  regexp?: DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbolRegexp;
  /**
   * @remarks
   * The logical symbol that is passed to the backend.
   * 
   * @example
   * match-one
   */
  symbol?: string;
  /**
   * @remarks
   * The tips that are displayed in the match item.
   * 
   * @example
   * You can enter up to 50 tips. Press the Enter key.
   */
  tip?: string;
  /**
   * @remarks
   * The number of match items. Valid values:
   * 
   * *   multi: You can specify multiple match items.
   * *   single: You can specify only a match item.
   * *   none: no match items.
   * 
   * @example
   * multi
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      maxLength: 'MaxLength',
      regexp: 'Regexp',
      symbol: 'Symbol',
      tip: 'Tip',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'number',
      description: 'string',
      maxLength: 'number',
      regexp: DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbolRegexp,
      symbol: 'string',
      tip: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.regexp && typeof (this.regexp as any).validate === 'function') {
      (this.regexp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContentFields extends $dara.Model {
  /**
   * @remarks
   * The description of the match field. This parameter is not returned or is empty if no match fields are found.
   * 
   * @example
   * Custom Header
   */
  extendField?: string;
  /**
   * @remarks
   * The information about the logical symbol.
   */
  logicalSymbol?: DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbol[];
  /**
   * @remarks
   * The match field.
   * 
   * @example
   * Header
   */
  matchField?: string;
  static names(): { [key: string]: string } {
    return {
      extendField: 'ExtendField',
      logicalSymbol: 'LogicalSymbol',
      matchField: 'MatchField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendField: 'string',
      logicalSymbol: { 'type': 'array', 'itemType': DescribeDcdnWafFilterInfoResponseBodyContentFieldsLogicalSymbol },
      matchField: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logicalSymbol)) {
      $dara.Model.validateArray(this.logicalSymbol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafFilterInfoResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy. The value of this parameter is the same as that of the DefenseScenes parameter in the request.
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @remarks
   * The information about the match condition.
   */
  fields?: DescribeDcdnWafFilterInfoResponseBodyContentFields[];
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      fields: { 'type': 'array', 'itemType': DescribeDcdnWafFilterInfoResponseBodyContentFields },
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

export class DescribeDcdnWafFilterInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information.
   */
  content?: DescribeDcdnWafFilterInfoResponseBodyContent[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 153ca2cd-3c01-44be-204c-64dbc6c88630
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnWafFilterInfoResponseBodyContent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

