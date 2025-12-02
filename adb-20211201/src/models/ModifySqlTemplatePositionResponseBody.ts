// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySqlTemplatePositionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request is successful, a **SUCCESS** message is returned.
   * *   If the request is abnormal, the detailed error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DC10091-348D-12B1-906D-AB49D658012E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: Succeeded.
   * *   **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

