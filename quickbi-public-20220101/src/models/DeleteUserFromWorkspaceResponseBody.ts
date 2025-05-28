// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserFromWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of the API execution. Possible values:
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
   * Indicates whether the request was successful. Value range:
   * - true: The request succeeded - false: The request failed
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

