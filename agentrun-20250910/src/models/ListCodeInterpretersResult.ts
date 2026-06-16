// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCodeInterpretersOutput } from "./ListCodeInterpretersOutput";


export class ListCodeInterpretersResult extends $dara.Model {
  /**
   * @remarks
   * The response status code. `SUCCESS` indicates the request was successful. If the request fails, this field contains an error type, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * A list of code interpreter objects.
   * 
   * @example
   * {}
   */
  data?: ListCodeInterpretersOutput;
  /**
   * @remarks
   * The unique request ID, used for troubleshooting.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCodeInterpretersOutput,
      requestId: 'string',
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

