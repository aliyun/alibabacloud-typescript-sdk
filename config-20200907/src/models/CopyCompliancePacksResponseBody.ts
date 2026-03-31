// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the compliance packages are replicated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  copyRulesResult?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E1E69DE-BDED-581E-B559-0C15690901D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      copyRulesResult: 'CopyRulesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyRulesResult: 'boolean',
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

