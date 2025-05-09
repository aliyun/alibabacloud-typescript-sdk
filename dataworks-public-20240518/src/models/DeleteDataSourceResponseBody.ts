// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * B56432E0-2112-5C97-88D0-AA0AE5C75C74
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call is successful.
   * - true: Successful
   * - false: Failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

