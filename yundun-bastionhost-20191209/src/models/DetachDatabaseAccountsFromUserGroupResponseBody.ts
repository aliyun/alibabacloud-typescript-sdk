// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachDatabaseAccountsFromUserGroupResponseBodyResults } from "./DetachDatabaseAccountsFromUserGroupResponseBodyResults";


export class DetachDatabaseAccountsFromUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC528ED1-C302-56E5-9CB5-ADA625D64FF9
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: DetachDatabaseAccountsFromUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupResponseBodyResults },
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

