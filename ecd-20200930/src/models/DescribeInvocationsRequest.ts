// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The command type of the O&M script.
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The encoding method of the returned data.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The cloud desktop ID. If you specify a cloud desktop, all script execution records for that cloud desktop are queried.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The list of cloud desktop IDs.
   * 
   * > The `DesktopId` parameter will be deprecated. Use this parameter to pass the list of cloud desktop IDs.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether to return the execution results of all cloud desktops when a remote command is run on multiple cloud desktops.
   */
  includeInvokeDesktops?: boolean;
  /**
   * @remarks
   * Specifies whether to return the output of the script execution in the results.
   * 
   * @example
   * false
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The script execution ID. Obtained from the response of [RunCommand](~~RunCommand~~).
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The overall execution status of the script. The overall execution status depends on the combined execution status of one or more cloud desktops in the execution.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.    
   * 
   * - Maximum value: 50.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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

