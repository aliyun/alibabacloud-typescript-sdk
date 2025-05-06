// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-5772ba41209e007b****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
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

