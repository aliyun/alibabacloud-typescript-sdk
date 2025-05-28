// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCollectionsResponseBodyResult } from "./ListCollectionsResponseBodyResult";


export class ListCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 162A632E-0A88-51CF-98F8-94FDEE82DB7D
   */
  requestId?: string;
  result?: ListCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The primary key ID of the favorite record.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCollectionsResponseBodyResult },
      success: 'boolean',
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

