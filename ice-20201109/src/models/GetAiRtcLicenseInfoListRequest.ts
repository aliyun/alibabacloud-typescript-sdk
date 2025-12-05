// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiRtcLicenseInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch.
   * 
   * @example
   * 17712***
   */
  licenseItemId?: string;
  /**
   * @remarks
   * Specifies whether to include the total count of records in the response. Defaults to `true`.
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the batch. Valid values:
   * 
   * *   `1`: Active
   * *   `2`: Expired
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of license. Valid values:
   * 
   * *   `1`: Audio call
   * *   `2`: Vision call
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

