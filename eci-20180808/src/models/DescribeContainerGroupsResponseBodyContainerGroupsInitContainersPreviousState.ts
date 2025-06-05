// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState extends $dara.Model {
  /**
   * @remarks
   * The details of the container status.
   * 
   * @example
   * working
   */
  detailStatus?: string;
  /**
   * @remarks
   * The exit code of the container.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the container stopped running.
   * 
   * @example
   * 2019-12-24T05:35:44Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The message about the container status.
   * 
   * @example
   * Started container
   */
  message?: string;
  /**
   * @remarks
   * The reason why the container is in this status.
   * 
   * @example
   * completed
   */
  reason?: string;
  /**
   * @remarks
   * The code of the container status.
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
   * 2019-12-24T05:35:44Z
   */
  startTime?: string;
  /**
   * @remarks
   * The container status. Valid values: Waiting, Running, and Terminated.
   * 
   * @example
   * Terminated
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

