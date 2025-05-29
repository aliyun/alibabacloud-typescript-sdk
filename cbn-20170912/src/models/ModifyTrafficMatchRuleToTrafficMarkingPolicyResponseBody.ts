// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrafficMatchRuleToTrafficMarkingPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13526224-5780-4426-8ADF-BC8B08700F23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

