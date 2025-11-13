// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiRtcAuthCodeListRequest extends $dara.Model {
  /**
   * @example
   * 17712***
   */
  licenseItemId?: string;
  /**
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
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

