// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolicyConfiguration extends $dara.Model {
  /**
   * @example
   * example_action_policy
   */
  actionPolicyId?: string;
  /**
   * @example
   * sls.builtin.dynamic
   */
  alertPolicyId?: string;
  /**
   * @example
   * 10m
   */
  repeatInterval?: string;
  static names(): { [key: string]: string } {
    return {
      actionPolicyId: 'actionPolicyId',
      alertPolicyId: 'alertPolicyId',
      repeatInterval: 'repeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPolicyId: 'string',
      alertPolicyId: 'string',
      repeatInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

