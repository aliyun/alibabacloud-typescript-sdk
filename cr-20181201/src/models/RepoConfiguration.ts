// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepoConfigurationArtifactBuildRuleParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to build only the image index.
   * 
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
  /**
   * @remarks
   * The default parameters for the image build rule.
   */
  artifactBuildRuleParameters?: RepoConfigurationArtifactBuildRuleParameters;
  /**
   * @remarks
   * The type of the image repository for automatic creation. Valid values: PRIVATE (private repository) and PUBLIC (public repository).
   * 
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * Specifies whether image version immutability is enabled. After it is enabled, you cannot overwrite image versions other than latest.
   * 
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

