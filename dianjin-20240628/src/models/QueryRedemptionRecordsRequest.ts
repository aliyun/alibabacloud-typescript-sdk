// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRedemptionRecordsRequest extends $dara.Model {
  /**
   * @example
   * 1001
   */
  externalUserId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * ORD20240101000001
   */
  redemptionOrderNo?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'externalUserId',
      page: 'page',
      pageSize: 'pageSize',
      redemptionOrderNo: 'redemptionOrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      page: 'number',
      pageSize: 'number',
      redemptionOrderNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

