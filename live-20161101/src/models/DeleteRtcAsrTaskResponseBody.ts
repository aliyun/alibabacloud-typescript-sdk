// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRtcAsrTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request. If success is returned, the request is successful. If an error message is returned, the request failed.
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
   * 85F94125-B695-1FB8-A7E7-3BE7CE07EF31
   */
  requestId?: string;
  /**
   * @remarks
   * The returned HTTP status code. HTTP status code 2000 indicates that the request is successful. If another HTTP status code is returned, the request failed.
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

