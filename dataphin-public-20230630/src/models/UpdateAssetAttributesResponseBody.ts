// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssetAttributesResponseBodyDataResultList extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the update fails. This value is empty when the update succeeds.
   * 
   * @example
   * AssetNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the update fails. This value is empty when the update succeeds.
   * 
   * @example
   * Asset does not exist: odps.project_a.table_not_exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The globally unique identifier (GUID) of the asset.
   * 
   * @example
   * odps.project_a.table_orders
   */
  guid?: string;
  /**
   * @remarks
   * Indicates whether the asset was updated successfully.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      guid: 'Guid',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      guid: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssetAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of assets that failed to be updated.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The update results for each asset.
   */
  resultList?: UpdateAssetAttributesResponseBodyDataResultList[];
  /**
   * @remarks
   * The number of assets that were updated successfully.
   * 
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      resultList: 'ResultList',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      resultList: { 'type': 'array', 'itemType': UpdateAssetAttributesResponseBodyDataResultList },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssetAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of updating asset property values.
   */
  data?: UpdateAssetAttributesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateAssetAttributesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

