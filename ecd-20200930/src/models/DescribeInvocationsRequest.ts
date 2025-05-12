// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The command type.
   * 
   * Valid values:
   * 
   * *   RunPowerShellScript: the PowerShell command.
   * *   RunBatScript: the Bat command.
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The encoding method of the command content and outputs.
   * 
   * Valid values:
   * 
   * *   Base64 (default): returns the Base64-encoded command content and command outputs.
   * *   PlainText: returns the original command content and outputs in plain text.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The cloud computer ID. If you specify a cloud computer, all command execution records of the cloud computer are queried.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer IDs.
   * 
   * >  The `DesktopId` parameter will be deprecated. We recommend using the DesktopIds parameter to specify cloud computer IDs instead.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether to return the execution results of the remote command on all cloud computers when executed across multiple cloud computers.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  includeInvokeDesktops?: boolean;
  /**
   * @remarks
   * Specifies whether to return command outputs in the response.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The execution ID of the command. You can obtain the value by calling the [RunCommand](~~RunCommand~~) operation.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The execution status of the command. The value of this parameter is determined by the execution states of the command on all participating cloud computers.
   * 
   * Valid values:
   * 
   * *   Finished: The command execution completes on all cloud computers. Alternatively, the command execution is manually stopped on some cloud computers while it completes on the others.
   * *   Stopped: The command execution stops.
   * *   Failed: The command execution failed on all cloud computers.
   * *   Running: Once there is a command execution in progress, the execution status defaults to Running.
   * *   PartialFailed: If the command execution failed on part of the cloud computers, the execution status is considered partially failed.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 1 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value that is returned from the last call to the previous DescribeInvocations operation.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
      desktopIds: 'DesktopIds',
      endUserId: 'EndUserId',
      includeInvokeDesktops: 'IncludeInvokeDesktops',
      includeOutput: 'IncludeOutput',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      contentEncoding: 'string',
      desktopId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      includeInvokeDesktops: 'boolean',
      includeOutput: 'boolean',
      invokeId: 'string',
      invokeStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

