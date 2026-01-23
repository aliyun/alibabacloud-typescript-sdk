// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageDomainRoutingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The request ID
   * 
   * @example
   * C8E90AB5-0A96-5D12-9E59-11EE463*****
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * crsdr-n6pbhgjx*****
   */
  ruleId?: string;
  /**
   * @remarks
   * Identification of whether the request is successful or not
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      ruleId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

