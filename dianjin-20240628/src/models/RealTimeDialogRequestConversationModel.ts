// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeDialogRequestConversationModel extends $dara.Model {
  /**
   * @example
   * 5
   */
  begin?: number;
  /**
   * @example
   * 2024-11-08 09:51:16
   */
  beginTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * 98457834685635
   */
  customerId?: string;
  /**
   * @example
   * 1374683645635
   */
  customerServiceId?: string;
  /**
   * @example
   * 0
   */
  customerServiceType?: string;
  /**
   * @example
   * 10
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * audio
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
      role: 'number',
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

