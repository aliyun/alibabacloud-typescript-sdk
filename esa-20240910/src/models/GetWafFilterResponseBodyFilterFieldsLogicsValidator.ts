// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafFilterResponseBodyFilterFieldsLogicsValidator extends $dara.Model {
  /**
   * @remarks
   * The error message when the validation fails.
   * 
   * @example
   * Enter a valid expression
   */
  errMsg?: string;
  /**
   * @remarks
   * The length of the value.
   */
  length?: WafQuotaInteger;
  /**
   * @remarks
   * The regular expression pattern of the value, which is used to validate strings.
   * 
   * @example
   * ^example$
   */
  pattern?: string;
  /**
   * @remarks
   * The range of the value, which is used to validate numbers.
   */
  range?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      length: 'Length',
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      length: WafQuotaInteger,
      pattern: 'string',
      range: WafQuotaInteger,
    };
  }

  validate() {
    if(this.length && typeof (this.length as any).validate === 'function') {
      (this.length as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

