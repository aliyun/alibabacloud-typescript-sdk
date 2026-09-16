// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactBuildTaskResponseBodyArtifactCompression extends $dara.Model {
  /**
   * @remarks
   * The operating system and architecture.
   * 
   * @example
   * linux/arm64
   */
  platform?: string;
  /**
   * @remarks
   * The number of layers to retain after compression.
   * 
   * @example
   * 10
   */
  squashKeepLayers?: number;
  /**
   * @remarks
   * The digest of the starting layer for compression.
   * 
   * @example
   * sha256:xxxxx
   */
  startLayerDigest?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      squashKeepLayers: 'SquashKeepLayers',
      startLayerDigest: 'StartLayerDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      squashKeepLayers: 'number',
      startLayerDigest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBodySourceArtifact extends $dara.Model {
  /**
   * @remarks
   * The artifact type. Only IMAGE is supported.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of artifact layers.
   * 
   * @example
   * 10
   */
  layerCount?: number;
  /**
   * @remarks
   * The repository ID. Only image repositories are supported.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  repoId?: string;
  /**
   * @remarks
   * The artifact size, in bytes.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The artifact version. Only image versions are supported.
   * 
   * @example
   * latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      layerCount: 'LayerCount',
      repoId: 'RepoId',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      layerCount: 'number',
      repoId: 'string',
      size: 'number',
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
   * The artifact type. Only IMAGE is supported.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The number of artifact layers.
   * 
   * @example
   * 5
   */
  layerCount?: number;
  /**
   * @remarks
   * The repository ID. Only image repositories are supported. The repository ID of the target artifact must be the same as that of the source artifact.
   * 
   * @example
   * crr-1234567
   */
  repoId?: string;
  /**
   * @remarks
   * The artifact size, in bytes.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The artifact version. Only images are supported.
   * 
   * @example
   * latest_accelerated
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      layerCount: 'LayerCount',
      repoId: 'RepoId',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      layerCount: 'number',
      repoId: 'string',
      size: 'number',
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
   * - `IMAGE_TO_ACCELERATED_IMAGE`: Accelerated image creation optimized for ACK scenarios.
   * 
   * - `IMAGE_TO_ECI_ACCELERATED_IMAGE`: Accelerated image artifact optimized for ECI scenarios.
   * 
   * @example
   * IMAGE_TO_ACCELERATED_IMAGE
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The artifact compression parameters.
   */
  artifactCompression?: GetArtifactBuildTaskResponseBodyArtifactCompression;
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
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1685415871
   */
  endTime?: number;
  /**
   * @remarks
   * The reserved field list of the artifact build task. The list elements should be empty.
   */
  instructions?: string[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The request ID.
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
   * The start time. The value is a UNIX timestamp in seconds.
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
   * The artifact build status. Valid values:
   * - `PENDING`: Scheduling in progress.
   * 
   * - `BUILDING`: Building in progress.
   * 
   * - `SUCCESS`: Build succeeded.
   * 
   * - `FAILED`: Build failed.
   * 
   * @example
   * BUILDING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildType: 'ArtifactBuildType',
      artifactCompression: 'ArtifactCompression',
      buildTaskId: 'BuildTaskId',
      code: 'Code',
      endTime: 'EndTime',
      instructions: 'Instructions',
      isSuccess: 'IsSuccess',
      priority: 'Priority',
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
      artifactCompression: GetArtifactBuildTaskResponseBodyArtifactCompression,
      buildTaskId: 'string',
      code: 'string',
      endTime: 'number',
      instructions: { 'type': 'array', 'itemType': 'string' },
      isSuccess: 'boolean',
      priority: 'number',
      requestId: 'string',
      sourceArtifact: GetArtifactBuildTaskResponseBodySourceArtifact,
      startTime: 'number',
      targetArtifact: GetArtifactBuildTaskResponseBodyTargetArtifact,
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.artifactCompression && typeof (this.artifactCompression as any).validate === 'function') {
      (this.artifactCompression as any).validate();
    }
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

