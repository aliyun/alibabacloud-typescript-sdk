// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRuleOperatorsResponseBodyOperators extends $dara.Model {
  /**
   * @example
   * String
   */
  dataType?: string;
  description?: string;
  /**
   * @example
   * StringEquals
   */
  name?: string;
  /**
   * @example
   * StringEquals
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      name: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleOperatorsResponseBody extends $dara.Model {
  operators?: ListConfigRuleOperatorsResponseBodyOperators[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A68DD98C-DE65-46AC-B2D2-04A4A9AB5B99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operators: 'Operators',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operators: { 'type': 'array', 'itemType': ListConfigRuleOperatorsResponseBodyOperators },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

