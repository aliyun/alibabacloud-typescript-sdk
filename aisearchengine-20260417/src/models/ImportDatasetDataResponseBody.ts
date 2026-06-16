// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDatasetDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates a successful request. Other values indicate exceptions. For more information, see error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data body, which uses an empty placeholder.
   * 
   * @example
   * []
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID, used for troubleshooting.
   * 
   * @example
   * 1a0f40dd17774641794394269ec0e9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

