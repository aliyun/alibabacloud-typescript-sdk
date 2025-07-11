// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatFlowTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Content of the returned data.
   * 
   * @example
   * 无
   */
  response?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      response: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.response) {
      $dara.Model.validateMap(this.response);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

