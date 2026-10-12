// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of the command execution. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  finishTime?: string;
  /**
   * @remarks
   * The instance ID on which the current command is executed.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The command execution ID.
   * 
   * @example
   * t-15775dc8****
   */
  invocationId?: string;
  /**
   * @remarks
   * The execution status of the command.
   * 
   * @example
   * Running
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The output of the command execution.
   * 
   * @example
   * success
   */
  output?: string;
  /**
   * @remarks
   * The start time of the command execution. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationId: 'InvocationId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      instanceId: 'string',
      invocationId: 'string',
      invocationStatus: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  data?: DescribeInvocationsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyData },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

