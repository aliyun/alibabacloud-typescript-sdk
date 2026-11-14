// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserProfilePathRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * InvalidParameter.UserProfileRuleType
   */
  code?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The parameter UserProfileRuleType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used for troubleshooting.
   * 
   * @example
   * 01A1CEEB-CDFF-18F9-B2BF-9997600D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

