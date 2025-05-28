// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SmartqQueryAbilityResponseBodyResult } from "./SmartqQueryAbilityResponseBodyResult";


export class SmartqQueryAbilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A************2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: SmartqQueryAbilityResponseBodyResult;
  /**
   * @remarks
   * Whether the operation was successful.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SmartqQueryAbilityResponseBodyResult,
      success: 'boolean',
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

