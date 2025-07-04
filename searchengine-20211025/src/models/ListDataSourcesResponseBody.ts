// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourcesResponseBodyResult } from "./ListDataSourcesResponseBodyResult";


export class ListDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 93A9E542-8CF8-5BA6-99AB-94C0FE520429
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: ListDataSourcesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyResult },
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

