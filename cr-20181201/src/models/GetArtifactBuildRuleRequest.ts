// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildRuleRequest extends $dara.Model {
  /**
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @example
   * crabr-o2670wqz2n70****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @example
   * crr-8dz3aedjqlmk****
   */
  scopeId?: string;
  /**
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

