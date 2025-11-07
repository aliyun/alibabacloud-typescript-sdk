// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistSettingResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Certificate number.
   * 
   * @example
   * 320321XXXXXXXX701X
   */
  certNo?: string;
  /**
   * @remarks
   * Certificate ID.
   * 
   * @example
   * shad861465f2aaeeb805b519e1a93ab2
   */
  certifyId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-10-16 17:28:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2025-10-16 17:28:03
   */
  gmtModified?: string;
  /**
   * @remarks
   * Whitelist ID.
   * 
   * @example
   * 6372003
   */
  id?: number;
  /**
   * @remarks
   * Remark.
   * 
   * @example
   * 测试白名单
   */
  remark?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000000332
   */
  sceneId?: number;
  /**
   * @remarks
   * Whitelist status:
   * - **VALID**: Valid.
   * - **INVALID**: Invalid.
   * - **DELETED**: Deleted.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * Effective end date.
   * 
   * @example
   * 2025-10-16 17:28:03
   */
  validEndDate?: string;
  /**
   * @remarks
   * Effective start time.
   * 
   * @example
   * 2025-10-16 17:28:03
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      remark: 'Remark',
      sceneId: 'SceneId',
      status: 'Status',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remark: 'string',
      sceneId: 'number',
      status: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination parameter: current page number, default value is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of certification details.
   */
  items?: DescribeWhitelistSettingResponseBodyItems[];
  /**
   * @remarks
   * Number of items per page for pagination.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 0B8ACFD2-C5F0-5F9F-8DD4-E44F93E360E8
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistSettingResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

