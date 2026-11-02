// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductSubscriptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the consumer name, which is used to search for subscription records of the API product by consumer name.
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
   * The subscription status, which is used to filter subscriptions by status. Valid values:
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

