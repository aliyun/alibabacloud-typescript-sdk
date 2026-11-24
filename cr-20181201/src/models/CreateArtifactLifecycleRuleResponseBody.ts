// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AA66379-B880-5123-9F6A-96BB25D****
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cralr-b6thg027zmk1****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

