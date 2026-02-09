// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsRequest extends $dara.Model {
  /**
   * @example
   * 1585790280
   */
  createdAfterTime?: number;
  /**
   * @example
   * 1586049480
   */
  createdBeforeTime?: number;
  /**
   * @example
   * ETARNPP,RTARNP
   */
  ids?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  pageStart?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * 252448085032933023
   */
  subUserId?: string;
  /**
   * @example
   * wait_confirm,dealing
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createdAfterTime: 'CreatedAfterTime',
      createdBeforeTime: 'CreatedBeforeTime',
      ids: 'Ids',
      language: 'Language',
      pageSize: 'PageSize',
      pageStart: 'PageStart',
      productCode: 'ProductCode',
      subUserId: 'SubUserId',
      ticketStatus: 'TicketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAfterTime: 'number',
      createdBeforeTime: 'number',
      ids: 'string',
      language: 'string',
      pageSize: 'number',
      pageStart: 'number',
      productCode: 'string',
      subUserId: 'string',
      ticketStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

