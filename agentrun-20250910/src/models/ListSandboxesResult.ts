// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSandboxesOutput } from "./ListSandboxesOutput";


export class ListSandboxesResult extends $dara.Model {
  /**
   * @remarks
   * The status of the request. A value of \\"SUCCESS\\" indicates that the request was successful. If the request fails, an error code is returned, such as \\"ERR_BAD_REQUEST\\", \\"ERR_VALIDATION_FAILED\\", or \\"ERR_INTERNAL_SERVER_ERROR\\".
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Contains the list of sandboxes.
   */
  data?: ListSandboxesOutput;
  /**
   * @remarks
   * The unique request ID used for issue tracking.
   * 
   * @example
   * 55D4BE40-2811-5CFB-8482-E0E98D575B1E
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
      data: ListSandboxesOutput,
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

