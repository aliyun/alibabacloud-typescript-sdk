// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryWhiteListSettingResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The unique identifier of the ID Verification request.
   * 
   * @example
   * sha43d9cabd52d370d9f4cca9468f71e
   */
  certifyId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-08-30 14:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-08-30 14:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The whitelist ID.
   * 
   * @example
   * 234822
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The verification scenario ID.
   * 
   * @example
   * 1000000332
   */
  sceneId?: number;
  /**
   * @remarks
   * The ServiceCode of the ID Verification cloud service.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - DELETE: Deleted.
   * - VALID: Not deleted and within the validity period (valid).
   * - INVALID: Not deleted but outside the validity period (invalid).
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The end date of the validity period.
   * 
   * @example
   * 2024-09-02 13:57:51
   */
  validEndDate?: string;
  /**
   * @remarks
   * The start date of the validity period.
   * 
   * @example
   * 2024-08-30 13:57:51
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
      serviceCode: 'ServiceCode',
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
      serviceCode: 'string',
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

export class PageQueryWhiteListSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. **200** indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
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
   * Id of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   */
  resultObject?: PageQueryWhiteListSettingResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 28
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': PageQueryWhiteListSettingResponseBodyResultObject },
      success: 'boolean',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

