// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36829379-0C38-5BC0-830A-92665BF77D4F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the added user group is returned. An empty string \\"\\" is returned if the add fails.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  result?: string;
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
      result: 'string',
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

