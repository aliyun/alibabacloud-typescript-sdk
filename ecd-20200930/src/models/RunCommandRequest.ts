// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The plaintext or Base64-encoded content of the script. The Base64-encoded script content cannot exceed 16 KB.
   * 
   * > If the script content is Base64-encoded, set the ContentEncoding parameter to Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ipconfig
   */
  commandContent?: string;
  /**
   * @remarks
   * The role used when the command is executed on the cloud computer.
   * 
   * @example
   * system
   */
  commandRole?: string;
  /**
   * @remarks
   * The encoding method of the script content.
   * 
   * > If the specified value is not within the valid values, the value is treated as PlainText.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The IDs of cloud computers. Valid values of N: 1 to 50. If you specify multiple cloud computers, the API call succeeds as long as the script is successfully executed on at least one cloud computer. If the script fails to be executed on all specified cloud computers, reset this parameter.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the end user. If this parameter is specified, the command is executed with the permissions of the end user.
   * 
   * > The user must have a session record on the cloud computer (the user has logged on and connected to the cloud computer after it is started, and the connection was not preempted by another user). This parameter is not supported for Linux cloud computers.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period for executing the script. Unit: seconds. Default value: 300. A timeout may occur when the script cannot run due to process issues, missing modules, or missing Cloud Assistant Agent. After a timeout, the script process is forcefully terminated.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The language type of the O&M script.
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

