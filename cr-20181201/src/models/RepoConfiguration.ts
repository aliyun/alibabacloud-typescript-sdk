// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepoConfigurationArtifactBuildRuleParameters } from "./RepoConfigurationArtifactBuildRuleParameters";


export class RepoConfiguration extends $dara.Model {
  artifactBuildRuleParameters?: RepoConfigurationArtifactBuildRuleParameters;
  /**
   * @remarks
   * This parameter is required.
   */
  repoType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      artifactBuildRuleParameters: 'ArtifactBuildRuleParameters',
      repoType: 'RepoType',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildRuleParameters: RepoConfigurationArtifactBuildRuleParameters,
      repoType: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    if(this.artifactBuildRuleParameters && typeof (this.artifactBuildRuleParameters as any).validate === 'function') {
      (this.artifactBuildRuleParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

