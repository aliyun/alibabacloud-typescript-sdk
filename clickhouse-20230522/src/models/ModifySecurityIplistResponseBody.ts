// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifySecurityIPListResponseBodyData } from "./ModifySecurityIplistResponseBodyData";


export class ModifySecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ModifySecurityIPListResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx-xxx-xxx
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
      data: ModifySecurityIPListResponseBodyData,
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

