// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityCheckTaskResultResponseBodyDataQualityCheckListOriginDialogue extends $dara.Model {
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
  content?: string;
  /**
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @example
   * 23876432
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
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  role?: string;
  /**
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
      id: 'id',
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
      id: 'number',
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

