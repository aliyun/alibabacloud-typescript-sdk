// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates } from "./DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates";


export class DescribeFingerPrintTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint templates.
   */
  fingerPrintTemplates?: DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C1D3FBE-84E1-5ABB-AD98-2003AC71****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerPrintTemplates: 'FingerPrintTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrintTemplates: { 'type': 'array', 'itemType': DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fingerPrintTemplates)) {
      $dara.Model.validateArray(this.fingerPrintTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

