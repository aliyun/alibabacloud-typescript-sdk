// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return result.
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * Backend-assigned ID, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

