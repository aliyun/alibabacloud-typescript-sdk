// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Is the operation successful?
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTranscriptionPhrasesResponseBody extends $dara.Model {
  data?: DeleteTranscriptionPhrasesResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * Is the operation successful?
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteTranscriptionPhrasesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

