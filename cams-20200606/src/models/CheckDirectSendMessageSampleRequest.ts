// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDirectSendMessageSampleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-xx**
   */
  custSpaceId?: string;
  interactive?: { [key: string]: any };
  /**
   * @example
   * {"text": "This is a direct send message"}
   */
  text?: { [key: string]: any };
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

