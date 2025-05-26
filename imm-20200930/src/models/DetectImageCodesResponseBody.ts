// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Codes } from "./Codes";


export class DetectImageCodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The barcodes or QR codes.
   * 
   * This parameter is required.
   */
  codes?: Codes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E93D6C9-5AC0-49F9-914D-E02678D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': Codes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codes)) {
      $dara.Model.validateArray(this.codes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

