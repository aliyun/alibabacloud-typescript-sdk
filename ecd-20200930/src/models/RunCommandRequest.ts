// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the command. The command content can be plaintext or Base64-encoded.\\
   * The Base64-encoded command content cannot exceed 16 KB in size.
   * 
   * > If the command content is Base64-encoded, you must set the ContentEncoding parameter to Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ipconfig
   */
  commandContent?: string;
  commandRole?: string;
  /**
   * @remarks
   * The encoding mode of the command content. Valid values:
   * 
   * *   PlainText: The command content is not encoded.
   * *   Base64: The command content is Base64-encoded.
   * 
   * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The ID of cloud desktop N. Valid values of N: 1 to 50.\\
   * If multiple cloud desktops are specified and the command execution succeeds on at least one of the cloud desktops, the operation is considered successful. If multiple cloud desktops are specified and the command execution fails on all the cloud desktops, verify the value of the parameter and try again.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the end user. If you specify a value, you run the command as the end user that is granted specific permissions. Note: The end user has sessions on a cloud computer. That is, when the cloud computer is started, the end user logs on to an Alibaba Cloud Workspace client and connects to the cloud computer, and the cloud computer is not preempted by another end user during the connection. This parameter is not available for Linux cloud computers.
   * 
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period for the command to run. Unit: seconds. Default value: 60.\\
   * A timeout error occurs if the command cannot be run because the process slows down or because a specific module or the Cloud Assistant client does not exist. When a timeout error occurs, the command process is forcibly terminated.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The language of the O\\&M command. Valid values:
   * 
   * *   RunBatScript
   * *   RunPowerShellScript
   * 
   * This parameter is required.
   * 
   * @example
   * RunPowerShellScript
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandRole: 'CommandRole',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandRole: 'string',
      contentEncoding: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      regionId: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

