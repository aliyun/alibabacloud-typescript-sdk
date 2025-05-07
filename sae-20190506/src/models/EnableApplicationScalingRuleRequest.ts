// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the auto scaling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * timer-0800-2100
   */
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

