// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMetadataAmountResponseBodyData } from "./GetMetadataAmountResponseBodyData";


export class GetMetadataAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMetadataAmountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B75ACF23-2BEB-44AC-A0B6-AE14EDCA***
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
      data: GetMetadataAmountResponseBodyData,
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

