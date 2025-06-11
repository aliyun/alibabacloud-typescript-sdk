// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantReadableScnResponseBodyData } from "./DescribeTenantReadableScnResponseBodyData";


export class DescribeTenantReadableScnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data in the return result of the request.
   */
  data?: DescribeTenantReadableScnResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8442BB1E-3171-1192-B9DC-F6F4E53B2673
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
      data: DescribeTenantReadableScnResponseBodyData,
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

