// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationCancelRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"taskId":"xxxxx-xxxx"}
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

