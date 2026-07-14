// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDirectSendMessageSampleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-xx**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The message body of the interactive type.
   */
  interactiveShrink?: string;
  /**
   * @remarks
   * The message body of the text content.
   * 
   * @example
   * {"text": "This is a direct send message"}
   */
  textShrink?: string;
  /**
   * @remarks
   * The direct-send content type. Valid values:
   * - interactive
   * - text
   * 
   * This parameter is required.
   * 
   * @example
   * interactive
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      interactiveShrink: 'Interactive',
      textShrink: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      interactiveShrink: 'string',
      textShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

