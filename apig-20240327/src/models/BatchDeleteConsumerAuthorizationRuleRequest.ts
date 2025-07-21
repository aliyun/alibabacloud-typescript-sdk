// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteConsumerAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule IDs.
   * 
   * @example
   * car-cus2d1em1hkg7732kuk0
   */
  consumerAuthorizationRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleIds: 'consumerAuthorizationRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAuthorizationRuleIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

