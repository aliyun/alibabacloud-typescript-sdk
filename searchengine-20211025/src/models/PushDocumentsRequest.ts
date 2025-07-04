// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: any[];
  /**
   * @remarks
   * The primary key field.
   * 
   * @example
   * id
   */
  pkField?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      pkField: 'pkField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'any' },
      pkField: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

