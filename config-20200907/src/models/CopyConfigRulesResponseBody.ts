// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rules are replicated. Valid values:
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
   * 7BD81ECF-3194-5A6B-8719-9FC283167AD4
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

