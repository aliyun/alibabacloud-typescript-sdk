// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRuleItemResponseBody extends $dara.Model {
  requestId?: string;
  resourceRuleItemId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRuleItemId: 'ResourceRuleItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRuleItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

