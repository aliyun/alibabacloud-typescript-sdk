// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEventRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_arqbuy7206
   */
  eventCode?: string;
  /**
   * @remarks
   * Event ID
   * 
   * @example
   * 2556
   */
  id?: number;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Input field template type
   * 
   * @example
   * register
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      eventCode: 'eventCode',
      id: 'id',
      regId: 'regId',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      eventCode: 'string',
      id: 'number',
      regId: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

