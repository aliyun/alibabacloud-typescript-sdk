// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBuildRecordByRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-1j95g4bu2s1i****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-asd6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-8dz3aedjqlmk****
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

