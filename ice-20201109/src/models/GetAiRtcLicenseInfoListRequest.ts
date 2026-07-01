// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiRtcLicenseInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The License Item ID.
   * 
   * @example
   * 17712***
   */
  licenseItemId?: string;
  /**
   * @remarks
   * Specifies whether to return the total count. Default value: `true`.
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the license batch. Valid values:
   * 
   * - `1`: Normal
   * 
   * - `2`: Expired
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The license type. Valid values:
   * 
   * - `1`: voice call
   * 
   * - `2`: visual understanding
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      licenseItemId: 'LicenseItemId',
      needTotalCount: 'NeedTotalCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseItemId: 'string',
      needTotalCount: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

