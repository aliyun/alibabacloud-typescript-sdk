// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The company name of the secondary partner.
   * 
   * @example
   * xxx有限公司
   */
  subPartnerCompanyName?: string;
  /**
   * @remarks
   * The PID of the secondary partner.
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

