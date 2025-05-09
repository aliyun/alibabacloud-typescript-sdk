// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDIJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * D33D4A51-5845-579A-B4BA-FAADD0F83D53
   */
  requestId?: string;
  /**
   * @remarks
   * true
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

