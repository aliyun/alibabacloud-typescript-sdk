// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * *   If the compliance package is deleted, no error code is returned.
   * *   If the compliance package fails to be deleted, an error code is returned. For more information about error codes, see [Error codes](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * CompliancePackAlreadyPending
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      errorCode: 'string',
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

export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult extends $dara.Model {
  /**
   * @remarks
   * An array that contains the deleted compliance packages.
   */
  operateCompliancePacks?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
    };
  }

  validate() {
    if(Array.isArray(this.operateCompliancePacks)) {
      $dara.Model.validateArray(this.operateCompliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the delete operations.
   */
  operateCompliancePacksResult?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacksResult: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateCompliancePacksResult && typeof (this.operateCompliancePacksResult as any).validate === 'function') {
      (this.operateCompliancePacksResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

