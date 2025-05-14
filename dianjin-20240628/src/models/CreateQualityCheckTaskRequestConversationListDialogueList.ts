// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityCheckTaskRequestConversationListDialogueList extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 2024-05-23 14:57:50
   */
  beginTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 2348234
   */
  customerId?: string;
  /**
   * @example
   * 23874627346
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      beginTime: 'beginTime',
      content: 'content',
      customerId: 'customerId',
      customerServiceId: 'customerServiceId',
      customerServiceType: 'customerServiceType',
      end: 'end',
      role: 'role',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      content: 'string',
      customerId: 'string',
      customerServiceId: 'string',
      customerServiceType: 'string',
      end: 'number',
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

