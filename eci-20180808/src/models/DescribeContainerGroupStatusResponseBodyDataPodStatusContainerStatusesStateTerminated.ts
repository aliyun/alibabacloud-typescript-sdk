// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated extends $dara.Model {
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * containerd://3ff993933bea366c4719e43a1b067d89bc7f01f1f573981659a44ff17a******
   */
  containerID?: string;
  /**
   * @remarks
   * The exit code.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the container ends running.
   * 
   * @example
   * 2021-05-23T20:55:31Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Completed
   */
  message?: string;
  /**
   * @remarks
   * The reason for the transition into the current status of the event.
   * 
   * @example
   * Completed
   */
  reason?: string;
  /**
   * @remarks
   * The signal code.
   * 
   * @example
   * 1
   */
  signal?: number;
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2021-05-23T20:49:31Z
   */
  startedAt?: string;
  static names(): { [key: string]: string } {
    return {
      containerID: 'ContainerID',
      exitCode: 'ExitCode',
      finishedAt: 'FinishedAt',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startedAt: 'StartedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerID: 'string',
      exitCode: 'number',
      finishedAt: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

