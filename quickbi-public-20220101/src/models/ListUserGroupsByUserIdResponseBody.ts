// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserGroupsByUserIdResponseBodyResult } from "./ListUserGroupsByUserIdResponseBodyResult";


export class ListUserGroupsByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E2440604-3059-561A-AD68-DEDBC870EB2B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the group.
   */
  result?: ListUserGroupsByUserIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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
      result: { 'type': 'array', 'itemType': ListUserGroupsByUserIdResponseBodyResult },
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

