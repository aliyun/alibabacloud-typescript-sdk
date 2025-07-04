// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseSchemaResponseBodyResult } from "./GetDatabaseSchemaResponseBodyResult";


export class GetDatabaseSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * List
   */
  result?: GetDatabaseSchemaResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetDatabaseSchemaResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

