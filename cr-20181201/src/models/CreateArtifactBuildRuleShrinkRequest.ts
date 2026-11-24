// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactBuildRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the accelerated image. Valid values:
   * 
   * - `ACCELERATED_IMAGE`: accelerated image.
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
   * The additional parameters.
   * 
   * @example
   * {}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The ID of the scope in which the rule takes effect. Valid values:
   * 
   * - The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-pmajihou6cg0****
   */
  scopeId?: string;
  /**
   * @remarks
   * The scope in which the rule takes effect. Valid values:
   * - `REPOSITORY`: repository level.
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

