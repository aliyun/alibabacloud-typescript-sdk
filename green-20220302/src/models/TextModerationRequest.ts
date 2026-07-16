// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of moderation service. Valid values:
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters for the moderation service. The value must be a JSON string.
   * 
   * @example
   * {"content":"The map is still black"}
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

