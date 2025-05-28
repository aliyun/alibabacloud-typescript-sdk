// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserGroupMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B6141A5A-A9EF-5F16-BF34-EFB9C1CCE4F3
   */
  requestId?: string;
  /**
   * @remarks
   * The result of adding members to a user group is returned. Valid values:
   * 
   * *   true: The task is added.
   * *   false: The tag failed to be added.
   * 
   * @example
   * true
   */
  result?: boolean;
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
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

