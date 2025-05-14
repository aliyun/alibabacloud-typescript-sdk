// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogDetailResponseBodyDataDialogueList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 123761283
   */
  customerId?: string;
  /**
   * @example
   * BOT
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * true
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1742869659849
   */
  id?: number;
  /**
   * @example
   * 193874634xxx
   */
  intentCode?: string;
  intentName?: string;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      hangUpDialog: 'hangUpDialog',
      id: 'id',
      intentCode: 'intentCode',
      intentName: 'intentName',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      hangUpDialog: 'boolean',
      id: 'number',
      intentCode: 'string',
      intentName: 'string',
      role: 'string',
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

