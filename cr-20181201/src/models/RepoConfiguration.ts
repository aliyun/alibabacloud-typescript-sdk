// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepoConfigurationArtifactBuildRuleParameters extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageIndexOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageIndexOnly: 'ImageIndexOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIndexOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

