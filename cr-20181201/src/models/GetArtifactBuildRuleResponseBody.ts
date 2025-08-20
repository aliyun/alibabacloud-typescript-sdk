// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildRuleResponseBodyParameters extends $dara.Model {
  imageIndexOnly?: boolean;
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
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  parameters?: GetArtifactBuildRuleResponseBodyParameters;
  /**
   * @example
   * 7A3E98F6-296C-54AC-A612-B75E7777D4C1
   */
  requestId?: string;
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

