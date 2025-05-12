// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetArtifactBuildTaskResponseBodySourceArtifact } from "./GetArtifactBuildTaskResponseBodySourceArtifact";
import { GetArtifactBuildTaskResponseBodyTargetArtifact } from "./GetArtifactBuildTaskResponseBodyTargetArtifact";


export class GetArtifactBuildTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact building task. Valid values:
   * 
   * *   `IMAGE_TO_ACCELERATED_IMAGE`: builds accelerated images for Container Service for Kubernetes (ACK) clusters.
   * *   `IMAGE_TO_ECI_ACCELERATED_IMAGE`: builds accelerated images for elastic container instances.
   * 
   * @example
   * IMAGE_TO_ACCELERATED_IMAGE
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the artifact building task.
   * 
   * @example
   * i2a-1yu****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the artifact building task ends.
   * 
   * @example
   * 156871880
   */
  endTime?: number;
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the source artifact.
   */
  sourceArtifact?: GetArtifactBuildTaskResponseBodySourceArtifact;
  /**
   * @remarks
   * The time when the artifact building task starts.
   * 
   * @example
   * 156871881
   */
  startTime?: number;
  /**
   * @remarks
   * The artifact that is built in the task.
   */
  targetArtifact?: GetArtifactBuildTaskResponseBodyTargetArtifact;
  /**
   * @remarks
   * The status of the artifact that is built in the task. Valid values:
   * 
   * *   `PENDING`: The artifact is being scheduled.
   * *   `BUILDING`: The artifact is being built.
   * *   `SUCCESS`: The artifact is built.
   * *   `FAILED`: The artifact fails to be built.
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

