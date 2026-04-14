// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDirectSendMessageSampleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-xx**
   */
  custSpaceId?: string;
  interactiveShrink?: string;
  /**
   * @example
   * {"text": "This is a direct send message"}
   */
  textShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
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

