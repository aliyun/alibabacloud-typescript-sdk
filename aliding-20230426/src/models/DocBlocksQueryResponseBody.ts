// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocBlocksQueryResponseBodyResult } from "./DocBlocksQueryResponseBodyResult";


export class DocBlocksQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: DocBlocksQueryResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DocBlocksQueryResponseBodyResult,
      success: 'boolean',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

