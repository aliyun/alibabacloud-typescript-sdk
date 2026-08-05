// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcCloudTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. The value can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The cloud transcoding task ID. The value can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
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

