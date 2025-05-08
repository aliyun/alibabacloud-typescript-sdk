// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketLifecycleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62373E71-5521-4620-8AAB-133CCE49357A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * b8f93xxxxx4881xxxxxc71d991
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

