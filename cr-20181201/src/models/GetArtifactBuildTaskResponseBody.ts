// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildTaskResponseBodySourceArtifact extends $dara.Model {
  /**
   * @remarks
   * The artifact type. Currently, only `IMAGE` is supported.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The repository ID. Currently, only image repositories are supported.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  repoId?: string;
  /**
   * @remarks
   * The artifact version. Currently, only image versions are supported.
   * 
   * @example
   * latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBodyTargetArtifact extends $dara.Model {
  /**
   * @remarks
   * The artifact type. Currently, only `IMAGE` is supported.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The repository ID. It must be the same as the repository ID of the source artifact. Only image repositories are supported.
   * 
   * @example
   * crr-1234567
   */
  repoId?: string;
  /**
   * @remarks
   * The artifact version. Currently, only image versions are supported.
   * 
   * @example
   * latest_accelerated
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The artifact build type. Valid values:
   * 
   * - `IMAGE_TO_ACCELERATED_IMAGE`: an accelerated image for ACK.
   * 
   * - `IMAGE_TO_ECI_ACCELERATED_IMAGE`: an accelerated image for ECI.
   * 
   * @example
   * IMAGE_TO_ACCELERATED_IMAGE
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the artifact build task.
   * 
   * @example
   * i2a-1yu****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The Unix timestamp in seconds when the task ended.
   * 
   * @example
   * 1685415871
   */
  endTime?: number;
  instructions?: string[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  /**
   * @remarks
   * The source artifact.
   */
  sourceArtifact?: GetArtifactBuildTaskResponseBodySourceArtifact;
  /**
   * @remarks
   * The Unix timestamp in seconds when the task started.
   * 
   * @example
   * 1685437471
   */
  startTime?: number;
  /**
   * @remarks
   * The target artifact.
   */
  targetArtifact?: GetArtifactBuildTaskResponseBodyTargetArtifact;
  /**
   * @remarks
   * The status of the artifact build task. Valid values:
   * 
   * - `PENDING`: The task is being scheduled.
   * 
   * - `BUILDING`: The task is in progress.
   * 
   * - `SUCCESS`: The task is successful.
   * 
   * - `FAILED`: The task failed.
   * 
   * @example
   * BUILDING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildType: 'ArtifactBuildType',
      buildTaskId: 'BuildTaskId',
      code: 'Code',
      endTime: 'EndTime',
      instructions: 'Instructions',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      sourceArtifact: 'SourceArtifact',
      startTime: 'StartTime',
      targetArtifact: 'TargetArtifact',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildType: 'string',
      buildTaskId: 'string',
      code: 'string',
      endTime: 'number',
      instructions: { 'type': 'array', 'itemType': 'string' },
      isSuccess: 'boolean',
      requestId: 'string',
      sourceArtifact: GetArtifactBuildTaskResponseBodySourceArtifact,
      startTime: 'number',
      targetArtifact: GetArtifactBuildTaskResponseBodyTargetArtifact,
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instructions)) {
      $dara.Model.validateArray(this.instructions);
    }
    if(this.sourceArtifact && typeof (this.sourceArtifact as any).validate === 'function') {
      (this.sourceArtifact as any).validate();
    }
    if(this.targetArtifact && typeof (this.targetArtifact as any).validate === 'function') {
      (this.targetArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

