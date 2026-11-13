// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The consumer name keyword. This parameter is used to search the subscription records of the API product by consumer name.
   * 
   * @example
   * consumer-1
   */
  consumerName?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The subscription status used to filter subscriptions. Valid values: PENDING and APPROVED.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consumerName: 'consumerName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

