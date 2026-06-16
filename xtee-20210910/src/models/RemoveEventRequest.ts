// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEventRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_arqbuy7206
   */
  eventCode?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2556
   */
  id?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The templatetype of the input parameter.
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

