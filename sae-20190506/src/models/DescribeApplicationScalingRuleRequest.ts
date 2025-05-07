// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * a0d2e04c-159d-40a8-b240-d2f2c263\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * a0d2e04c-159d-40a8-b240-d2f2c263****
   */
  appId?: string;
  /**
   * @remarks
   * test
   * 
   * This parameter is required.
   * 
   * @example
   * test
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

