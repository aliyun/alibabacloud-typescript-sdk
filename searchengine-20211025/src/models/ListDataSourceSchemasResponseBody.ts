// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceSchemasResponseBodyResult } from "./ListDataSourceSchemasResponseBodyResult";


export class ListDataSourceSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListDataSourceSchemasResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceSchemasResponseBodyResult },
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

