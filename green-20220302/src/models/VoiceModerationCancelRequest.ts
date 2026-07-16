// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationCancelRequest extends $dara.Model {
  /**
   * @remarks
   * The type of moderation service. Valid values include \\`nickname_detection\\` for user nicknames. Other values are to be determined.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The ID of the task that you want to cancel.
   * 
   * @example
   * {
   *         "taskId": "xxxxx-xxxx"
   *     }
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

