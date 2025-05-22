// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePropertyResponseBodyUpdateResult } from "./UpdatePropertyResponseBodyUpdateResult";


export class UpdatePropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the modification.
   */
  updateResult?: UpdatePropertyResponseBodyUpdateResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: UpdatePropertyResponseBodyUpdateResult,
    };
  }

  validate() {
    if(this.updateResult && typeof (this.updateResult as any).validate === 'function') {
      (this.updateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

