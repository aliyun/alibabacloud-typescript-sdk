// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonLogsResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the action corresponding to the log.
   * 
   * @example
   * CreaterCluster
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-9T3xPNezoS
   */
  clusterId?: string;
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @remarks
   * The message of the log.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @remarks
   * The request ID associated with the action that generated the log.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The action state in the log. Valid values:
   * 
   * *   InProgress: The action is being performed.
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The involved resource.
   * 
   * @example
   * i-abc***
   */
  target?: string;
  /**
   * @remarks
   * The time when the log was generated.
   * 
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logType: 'LogType',
      message: 'Message',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logType: 'string',
      message: 'string',
      operatorUid: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

