// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-brlg4cbj2ylkrqqq
   */
  instanceId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cralr-3v8pao9k7chb8q62
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

