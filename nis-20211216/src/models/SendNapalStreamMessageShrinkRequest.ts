// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNapalStreamMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request configuration object.
   */
  configurationShrink?: string;
  /**
   * @remarks
   * The message object that contains user input and session context information.
   */
  messageShrink?: string;
  /**
   * @remarks
   * The additional request information.
   */
  metadataShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configurationShrink: 'Configuration',
      messageShrink: 'Message',
      metadataShrink: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationShrink: 'string',
      messageShrink: 'string',
      metadataShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

