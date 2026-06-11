// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerListRequest extends $dara.Model {
  /**
   * @remarks
   * Page index, starting from the first page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of entries returned per page. Maximum value supported is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Tier-2 partner company name
   * 
   * @example
   * xxx有限公司
   */
  subPartnerCompanyName?: string;
  /**
   * @remarks
   * Tier-2 partner PID
   * 
   * @example
   * 2323431211
   */
  subPartnerPid?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      subPartnerCompanyName: 'SubPartnerCompanyName',
      subPartnerPid: 'SubPartnerPid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      subPartnerCompanyName: 'string',
      subPartnerPid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

