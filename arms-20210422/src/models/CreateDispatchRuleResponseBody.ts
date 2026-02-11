// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDispatchRuleResponseBody extends $dara.Model {
  dispatchRuleId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRuleId: 'DispatchRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRuleId: 'number',
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

