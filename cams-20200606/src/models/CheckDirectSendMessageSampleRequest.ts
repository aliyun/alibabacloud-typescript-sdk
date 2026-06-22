// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDirectSendMessageSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId of an ISV sub-customer or the instance ID of a direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-xx**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The body of an interactive message.
   */
  interactive?: { [key: string]: any };
  /**
   * @remarks
   * The body of a text message.
   * 
   * @example
   * {"text": "This is a direct send message"}
   */
  text?: { [key: string]: any };
  /**
   * @remarks
   * The type of the direct message content. Valid values:
   * 
   * - interactive
   * 
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
      interactive: 'Interactive',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      interactive: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      text: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.interactive) {
      $dara.Model.validateMap(this.interactive);
    }
    if(this.text) {
      $dara.Model.validateMap(this.text);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

