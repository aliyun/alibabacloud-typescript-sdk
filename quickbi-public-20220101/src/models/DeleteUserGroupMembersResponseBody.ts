// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABBAD906-****-5D18-B23D-****53AB0AA2
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the interface execution. Possible values:
   * 
   * - true: Execution succeeded
   * - false: Execution failed
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
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

