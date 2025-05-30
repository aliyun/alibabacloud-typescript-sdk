// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQuotaPlanResponseBodyData } from "./GetQuotaPlanResponseBodyData";


export class GetQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetQuotaPlanResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0aa16667684362147582e038f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQuotaPlanResponseBodyData,
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

