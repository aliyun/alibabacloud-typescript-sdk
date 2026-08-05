// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRtcAsrTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the call. The value is \\`success\\` if the call is successful. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D208CC1-27C9-51E9-82B8-A6682D466421
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. A value of \\`2000\\` indicates that the call was successful. Other values indicate that the call failed.
   * 
   * @example
   * 2000
   */
  retCode?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

