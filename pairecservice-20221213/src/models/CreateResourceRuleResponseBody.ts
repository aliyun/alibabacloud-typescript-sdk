// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRuleResponseBody extends $dara.Model {
  requestId?: string;
  resourceRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRuleId: 'ResourceRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

