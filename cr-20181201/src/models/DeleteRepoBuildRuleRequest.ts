// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-36tffn0kouvi****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

