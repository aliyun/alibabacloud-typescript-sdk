// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState extends $dara.Model {
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
   * 2018-08-02T15:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * Created container
   */
  message?: string;
  /**
   * @remarks
   * The reason why the container is in this status.
   * 
   * @example
   * Started
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
   * 2018-08-02T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The container status. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Terminated
   * 
   * @example
   * Running
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

