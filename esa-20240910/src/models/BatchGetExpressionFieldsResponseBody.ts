// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * The list of matching fields for a single expression.
   */
  fields?: string[];
  /**
   * @remarks
   * The ID of the expression, which corresponds to the ID in the request parameters.
   * 
   * @example
   * 1
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
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

export class BatchGetExpressionFieldsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of matching fields.
   */
  fields?: BatchGetExpressionFieldsResponseBodyFields[];
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
      fields: 'Fields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': BatchGetExpressionFieldsResponseBodyFields },
      requestId: 'string',
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

