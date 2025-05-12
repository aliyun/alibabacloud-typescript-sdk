// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactBuildRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact.
   * 
   * *   `ACCELERATED_IMAGE`: accelerated images.
   * 
   * This parameter is required.
   * 
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-cxreylqvcyje****
   */
  instanceId?: string;
  /**
   * @remarks
   * Additional parameters.
   * 
   * @example
   * {}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The ID of the effective range of the rule.
   * 
   * *   Set the value to the ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-pmajihou6cg0****
   */
  scopeId?: string;
  /**
   * @remarks
   * The effective range of the rule. Valid values:
   * 
   * *   `REPOSITORY`
   * 
   * This parameter is required.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      instanceId: 'InstanceId',
      parametersShrink: 'Parameters',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      instanceId: 'string',
      parametersShrink: 'string',
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

