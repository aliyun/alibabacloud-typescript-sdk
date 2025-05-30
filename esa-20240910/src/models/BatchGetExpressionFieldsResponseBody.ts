// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetExpressionFieldsResponseBodyFields } from "./BatchGetExpressionFieldsResponseBodyFields";


export class BatchGetExpressionFieldsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of match fields.
   */
  fields?: BatchGetExpressionFieldsResponseBodyFields[];
  /**
   * @remarks
   * Request ID.
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

