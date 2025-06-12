// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection extends $dara.Model {
  /**
   * @remarks
   * The reason why the connection was closed. This parameter is returned only when the `Status` value is `Disconnected`, `Terminated`, or `Failed`. Valid values:
   * 
   * *   InstanceNotExists: The specified instance did not exist or was released.
   * *   InstanceNotRunning: The specified instance was not running.
   * *   DeliveryTimeout: The connection timed out.
   * *   AgentNeedUpgrade: Cloud Assistant Agent required an upgrade.
   * *   AgentNotOnline: Cloud Assistant Agent was not connected to the Cloud Assistant server.
   * *   MessageFormatInvalid: The message format was invalid.
   * *   AgentSocketClosed: The connection was closed as expected.
   * *   ClientClosed: Session Manager Client closed the connection.
   * 
   * @example
   * AgentNeedUpgrade
   */
  closedReason?: string;
  /**
   * @remarks
   * The time when the connection was closed.
   * 
   * @example
   * 2024-01-19T09:16:46Z
   */
  endTime?: string;
  failedDetail?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the connection started to be established.
   * 
   * @example
   * 2024-01-19T09:16:40Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the session. Valid values:
   * 
   * *   Connecting: The connection is being established.
   * *   Connected: The connection is established.
   * *   Disconnected: The connection is disconnected.
   * *   Terminating: The session is being terminated.
   * *   Terminated: The session is terminated.
   * *   Failed: The connection failed.
   * 
   * @example
   * Connecting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      closedReason: 'ClosedReason',
      endTime: 'EndTime',
      failedDetail: 'FailedDetail',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closedReason: 'string',
      endTime: 'string',
      failedDetail: 'string',
      instanceId: 'string',
      startTime: 'string',
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

