// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMmsTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted timer.
   * 
   * @example
   * success
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dd4516687375802853481ec9fd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

