// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndicesResponseBodyIndices } from "./ListIndicesResponseBodyIndices";


export class ListIndicesResponseBody extends $dara.Model {
  indices?: ListIndicesResponseBodyIndices;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: ListIndicesResponseBodyIndices,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.indices && typeof (this.indices as any).validate === 'function') {
      (this.indices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

