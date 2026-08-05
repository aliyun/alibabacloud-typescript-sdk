// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRtcCloudTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. The ID can be up to 64 characters long and can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cloud transcoding job. The ID can be up to 64 characters long and can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ******73-8501-****-8ac1-72295a******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

