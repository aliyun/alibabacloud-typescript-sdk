// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelSearchHotelListRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The city code.
   * 
   * This parameter is required.
   * 
   * @example
   * beijing
   */
  cityCode?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      cityCode: 'CityCode',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      cityCode: 'string',
      pageNo: 'number',
      pageSize: 'number',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

