// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationCancelRequest extends $dara.Model {
  /**
   * @remarks
   * The moderation service type.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The TaskId of the task to be canceled.
   * 
   * @example
   * {\\"taskId\\":\\"vi_s_4O9gp7GfNQdx9GOqdekFmk-1z2RJT\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

