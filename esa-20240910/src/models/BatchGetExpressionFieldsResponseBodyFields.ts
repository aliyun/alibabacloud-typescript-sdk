// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetExpressionFieldsResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * List of match fields for a single expression.
   */
  fields?: string[];
  /**
   * @remarks
   * ID of the expression, corresponding to the ID in the input parameters.
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

