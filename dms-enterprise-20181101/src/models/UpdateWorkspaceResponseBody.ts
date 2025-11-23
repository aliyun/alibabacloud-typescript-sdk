// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * C51420E3-144A-4A94-B473-8662FCF4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

