// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRulesCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of system defense rules.
   * 
   * @example
   * 10
   */
  totalSystemClientRuleCount?: number;
  /**
   * @remarks
   * The total number of custom defense rules.
   * 
   * @example
   * 10
   */
  totalUserDefineRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalSystemClientRuleCount: 'TotalSystemClientRuleCount',
      totalUserDefineRuleCount: 'TotalUserDefineRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalSystemClientRuleCount: 'number',
      totalUserDefineRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

