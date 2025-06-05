// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos extends $dara.Model {
  /**
   * @remarks
   * The message about the phase.
   * 
   * @example
   * Pull base image for container container-1 successfully
   */
  message?: string;
  /**
   * @remarks
   * The phase name. Valid values:
   * 
   * *   PullBaseImage: Pull the original container image.
   * *   CommitContainer: Commit the container to generate an image.
   * *   PushCommittedImage: Push the image to Container Registry.
   * 
   * @example
   * PullBaseImage
   */
  phase?: string;
  /**
   * @remarks
   * The record time of the phase.
   * 
   * @example
   * 2023-01-05T14:06:40.920005316+08:00
   */
  recordTime?: string;
  /**
   * @remarks
   * The state of the phase.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      phase: 'Phase',
      recordTime: 'RecordTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      phase: 'string',
      recordTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

