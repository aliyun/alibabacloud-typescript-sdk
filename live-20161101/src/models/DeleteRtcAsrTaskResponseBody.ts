// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRtcAsrTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the result. If the value is \\`success\\`, the operation is successful. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85F94125-B695-1FB8-A7E7-3BE7CE******
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. A value of \\`2000\\` indicates that the operation is successful. Other values indicate that an error occurred.
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

