// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the chat session.
   * 
   * @example
   * Product consultation session
   */
  name?: string;
  /**
   * @remarks
   * The list of API products associated with the chat session.
   */
  products?: string[];
  /**
   * @remarks
   * The conversation type of the session. Valid values: MODEL and AGENT.
   * 
   * @example
   * MODEL
   */
  talkType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      products: 'products',
      talkType: 'talkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      products: { 'type': 'array', 'itemType': 'string' },
      talkType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

