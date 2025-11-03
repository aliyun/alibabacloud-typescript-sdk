// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildRuleResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the index-only mode is enabled.
   * 
   * @example
   * false
   */
  imageIndexOnly?: boolean;
  /**
   * @remarks
   * The list of files that you want to prefetch when you use the image acceleration feature. Each entry contains the Base64-encoded absolute path of a file.
   * 
   * @example
   * L2hvbWUvdGVzdC8=
   */
  priorityFile?: string;
  static names(): { [key: string]: string } {
    return {
      imageIndexOnly: 'ImageIndexOnly',
      priorityFile: 'PriorityFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIndexOnly: 'boolean',
      priorityFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact. Valid values:
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
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Additional parameters.
   */
  parameters?: GetArtifactBuildRuleResponseBodyParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A3E98F6-296C-54AC-A612-B75E7777D4C1
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the effective range of the artifact building rule.
   * 
   * *   The parameter value is the ID of the image repository.
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
      code: 'Code',
      isSuccess: 'IsSuccess',
      parameters: 'Parameters',
      requestId: 'RequestId',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      parameters: GetArtifactBuildRuleResponseBodyParameters,
      requestId: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

