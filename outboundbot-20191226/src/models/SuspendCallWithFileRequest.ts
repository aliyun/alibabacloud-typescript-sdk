// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendCallWithFileRequest extends $dara.Model {
  /**
   * @remarks
   * File path. Required.
   * 
   * > Get the value for this parameter by calling the GetJobDataUploadParams operation. Use the Folder value returned in the response as the FilePath value.
   * 
   * @example
   * xxxx
   */
  filePath?: string;
  /**
   * @remarks
   * Task group ID. Required.
   * 
   * @example
   * 0197261b-30e6-467b-83d6-7f72af868b03
   */
  groupId?: string;
  /**
   * @remarks
   * Instance ID. Required.
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

