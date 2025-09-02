// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DesensitizeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned after masking.
   * 
   * @example
   * {     "desensData": "**198807120510**"   }
   */
  desensitizeData?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCA321BA-46C5-40E9-8A08-6******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desensitizeData: 'DesensitizeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensitizeData: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

