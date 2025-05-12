// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocationsInvokeDesktops } from "./DescribeInvocationsResponseBodyInvocationsInvokeDesktops";


export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded command content.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * The type of the command.
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The time when the execution task is created.
   * 
   * @example
   * 2020-12-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @remarks
   * The overall execution status of the command. The value of this parameter depends on the execution status of the command on all the involved cloud computers. Valid values:
   * 
   * *   Pending: The command is being verified or sent. If the execution status is Pending on at least one cloud computer, the overall status is considered Pending.
   * 
   * *   Running: The command is being executed on cloud computers. If the execution status is Running on at least one cloud computer, the overall status is considered Running.
   * 
   * *   Success: If the execution status is Success on at least one cloud computer and either Success or Stopped on all other cloud computers, the overall status is considered Success.
   * 
   * *   Failed: If the execution status is Stopped or Failed on all cloud computers, the overall status is considered Failed. If any execution status on cloud computers matches one of the following values, Failed is returned.
   * 
   *     *   Invalid: The command is invalid.
   *     *   Aborted: The command failed to be sent.
   *     *   Failed: The command is executed, but the exit code is not 0.
   *     *   Timeout: The command execution timed out.
   *     *   Error: An error occurred when the command is being executed.
   * 
   * *   Stopping: The command execution is being stopped. If the execution status is Stopping on at least one cloud computer, the overall status is considered Stopping.
   * 
   * *   Stopped: The command execution stops. If the execution status is Stopped on at least one cloud computer, the overall status is considered Stopped. If any execution status on cloud computers matches one of the following values, Stopped is returned.
   * 
   *     *   Cancelled: The command execution is canceled.
   *     *   Terminated: The command execution is terminated.
   * 
   * *   PartialFailed: The command execution succeeded on some cloud computers but failed on others. If the execution status on any cloud computer is Success, Failed, or Stopped, the overall status is considered PartialFailed.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The total number of cloud computers on which the command is executed.
   * 
   * @example
   * 1
   */
  invokeDesktopCount?: number;
  /**
   * @remarks
   * The total number of cloud computers on which the command execution succeeds.
   * 
   * @example
   * 1
   */
  invokeDesktopSucceedCount?: number;
  /**
   * @remarks
   * The cloud computers on which the command is executed.
   */
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      endUserId: 'EndUserId',
      invocationStatus: 'InvocationStatus',
      invokeDesktopCount: 'InvokeDesktopCount',
      invokeDesktopSucceedCount: 'InvokeDesktopSucceedCount',
      invokeDesktops: 'InvokeDesktops',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandType: 'string',
      creationTime: 'string',
      endUserId: 'string',
      invocationStatus: 'string',
      invokeDesktopCount: 'number',
      invokeDesktopSucceedCount: 'number',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvokeDesktops },
      invokeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invokeDesktops)) {
      $dara.Model.validateArray(this.invokeDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

