// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachDatabaseAccountsFromUserResponseBodyResults } from "./DetachDatabaseAccountsFromUserResponseBodyResults";


export class DetachDatabaseAccountsFromUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79D7E114-CB52-5695-AB15-12776C308387
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: DetachDatabaseAccountsFromUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserResponseBodyResults },
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

