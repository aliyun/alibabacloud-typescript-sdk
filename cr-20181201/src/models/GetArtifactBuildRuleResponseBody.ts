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
   * The task priority. Valid values: [1, 5].
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The list of prefetch files for the accelerated image. Each line contains an absolute path. The list is Base64-encoded.
   * 
   * @example
   * L2hvbWUvdGVzdC8=
   */
  priorityFile?: string;
  static names(): { [key: string]: string } {
    return {
      imageIndexOnly: 'ImageIndexOnly',
      priority: 'Priority',
      priorityFile: 'PriorityFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIndexOnly: 'boolean',
      priority: 'number',
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
   * The response code. Valid values:
   * 
   * - **200**: success.
   * - Other values: error codes.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - `true`: The API call is successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The additional parameters.
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

