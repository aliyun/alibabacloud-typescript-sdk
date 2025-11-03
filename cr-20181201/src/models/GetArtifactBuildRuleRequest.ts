// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact.
   * 
   * *   `ACCELERATED_IMAGE`: accelerated images.
   * 
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The ID of the artifact building rule.
   * 
   * @example
   * crabr-o2670wqz2n70****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the effective range of the artifact building rule.
   * 
   * *   Set the value to the ID of the image repository.
   * 
   * @example
   * crr-8dz3aedjqlmk****
   */
  scopeId?: string;
  /**
   * @remarks
   * The effective range of the artifact building rule. Valid values:
   * 
   * *   `REPOSITORY`: The artifact building rule is effective in the repository level.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      buildRuleId: 'string',
      instanceId: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

