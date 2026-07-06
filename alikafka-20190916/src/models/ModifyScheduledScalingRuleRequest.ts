// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Enable or disable the scheduled task policy. Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * > For a one-time scheduling policy type, the start execution time must be more than 30 minutes later than the current time for the policy to be enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * contact-id
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
      regionId: 'string',
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

