// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchedulerRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CNAME that is assigned by Sec-Traffic Manager for the scheduling rule.
   * 
   * > To enable the scheduling rule, you must map the domain name of the service to the CNAME.
   * 
   * @example
   * 48k7b372gpl4****.aliyunddos0001.com
   */
  cname?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8DFB602D-1AAC-46C4-90F2-C84086E7A6E4
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * testrule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      requestId: 'RequestId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      requestId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

