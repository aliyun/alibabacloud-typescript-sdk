// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridMonitorNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * %s
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E190AB2E-7BF9-59B7-9DDC-7CB1782C5ECD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

