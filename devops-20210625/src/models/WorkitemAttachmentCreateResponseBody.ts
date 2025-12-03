// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkitemAttachmentCreateResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * InvalidTagGroup.IdNotFoundntraceId: 2137844496.4337.16624448853053831
   */
  errorMessage?: string;
  /**
   * @example
   * F590C9D8-E908-5B6C-95AC-56B7E8011FFA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
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

