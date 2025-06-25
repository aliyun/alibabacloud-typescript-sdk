// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachDatabaseAccountsToUserGroupResponseBodyResults } from "./AttachDatabaseAccountsToUserGroupResponseBodyResults";


export class AttachDatabaseAccountsToUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D0EB759-CB0A-537D-A2CC-13A9854FA08D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: AttachDatabaseAccountsToUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupResponseBodyResults },
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

