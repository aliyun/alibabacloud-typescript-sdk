// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachDatabaseAccountsToUserResponseBodyResults } from "./AttachDatabaseAccountsToUserResponseBodyResults";


export class AttachDatabaseAccountsToUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23120B8E-8737-50BD-A3A3-902A7821F04D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: AttachDatabaseAccountsToUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

