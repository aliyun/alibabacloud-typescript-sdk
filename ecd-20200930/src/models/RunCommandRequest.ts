// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The script content in plaintext or Base64-encoded format.<br>
   * The Base64-encoded script content cannot exceed 16 KB.<br>
   * 
   * > If the script content is Base64-encoded, you must set the `ContentEncoding` parameter to `Base64`.
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
   * The encoding mode of the script content.
   * 
   * > If you specify a value that is not a valid enumeration member, the system defaults to `PlainText`.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The IDs of the cloud computers on which to run the script. You can specify up to 50 IDs.<br>
   * The API call is considered successful if the script runs on at least one of the specified cloud computers. The call fails only if the script fails on all of them.<br>
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * If you specify this parameter, the command runs with the permissions of the specified end user.
   * 
   * > This user must have a session history on the cloud computer. This means the user must have logged in after the cloud computer started and their session was not taken over by another user. This parameter is not supported for Linux cloud computers.
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
   * The script execution timeout, in seconds. Default value: 300.<br>
   * A command times out if the script cannot be run due to issues such as process conflicts, missing modules, or an unavailable Cloud Assistant client. When a command times out, the system forcibly terminates the script process.<br>
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the script.
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

