// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchedulerRuleResponseBody extends $dara.Model {
  cname?: string;
  requestId?: string;
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

