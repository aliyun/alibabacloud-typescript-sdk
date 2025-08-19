// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryWhiteListSettingResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * Unique identifier for real person authentication.
   * 
   * @example
   * sha43d9cabd52d370d9f4cca9468f71e
   */
  certifyId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-08-30 14:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2024-08-30 14:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Whitelist ID.
   * 
   * @example
   * 234822
   */
  id?: number;
  /**
   * @remarks
   * Remark information.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * Authentication scene ID.
   * 
   * @example
   * 1000000332
   */
  sceneId?: number;
  /**
   * @remarks
   * ServiceCode of the real person cloud product
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Status:
   * 
   * - DELETE: Deleted
   * - VALID: Not deleted and within the validity period, valid
   * - INVALID: Not deleted but outside the validity period, invalid
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * End date of validity
   * 
   * @example
   * 2024-09-02 13:57:51
   */
  validEndDate?: string;
  /**
   * @remarks
   * Start date of validity
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
   * Return code, **200** indicates a successful API response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * Request result
   */
  resultObject?: PageQueryWhiteListSettingResponseBodyResultObject[];
  /**
   * @remarks
   * Whether the response was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 28
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
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

