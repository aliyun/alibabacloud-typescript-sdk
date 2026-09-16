// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the accelerated image. Valid values:
   * 
   * - `ACCELERATED_IMAGE`: generates an accelerated image.
   * 
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The build rule ID.
   * 
   * @example
   * crabr-o2670wqz2n70****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scope in which the rule takes effect. Valid values:
   * 
   * - ScopeId: the image repository ID.
   * 
   * @example
   * crr-8dz3aedjqlmk****
   */
  scopeId?: string;
  /**
   * @remarks
   * The scope of the rule. Valid values:
   * - `REPOSITORY`: repository level.
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

