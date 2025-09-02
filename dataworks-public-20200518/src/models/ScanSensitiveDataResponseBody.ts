// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanSensitiveDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * The check result. sensDatas indicates the rules that are used to check the sensitive data. sensDatas includes the following parameters:
   * 
   * *   hitCount: the number of times that the sensitive data hits the rule.
   * *   ruleName: the name of the rule.
   */
  sensitives?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitives: 'Sensitives',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitives: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.sensitives) {
      $dara.Model.validateMap(this.sensitives);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

