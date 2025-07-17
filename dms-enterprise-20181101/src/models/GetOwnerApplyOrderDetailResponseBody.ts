// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * PRODUCT
   */
  envType?: string;
  /**
   * @remarks
   * The IDs of the original owners.
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The nicknames of the owners.
   */
  ownerNickNames?: string[];
  /**
   * @remarks
   * The search name of the resource.
   * 
   * @example
   * yuyang【test】
   */
  searchName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * > : This parameter is returned when you submit a Database-OWNER ticket.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      searchName: 'SearchName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNickNames)) {
      $dara.Model.validateArray(this.ownerNickNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The instance is a logical database.
   * *   **false**: The instance is not a logical database.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The details of the resource.
   */
  resourceDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 12345
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      resourceDetail: 'ResourceDetail',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      resourceDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResourcesResourceDetail,
      targetId: 'string',
    };
  }

  validate() {
    if(this.resourceDetail && typeof (this.resourceDetail as any).validate === 'function') {
      (this.resourceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the submitted ticket. Valid values:
   * 
   * *   **INSTANCE**: the ticket that applies for the permissions to be an instance owner
   * *   **DB**: the ticket that applies for the permissions to be a database owner
   * *   **TABLE**: the ticket that applies for the permissions to be a table owner
   * 
   * @example
   * DB
   */
  applyType?: string;
  /**
   * @remarks
   * The details of the requested resource.
   */
  resources?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources[];
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      resources: { 'type': 'array', 'itemType': GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetailResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOwnerApplyOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of the ticket.
   */
  ownerApplyOrderDetail?: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB784055-E8CB-4461-AB0B-483A1DA32BB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      ownerApplyOrderDetail: 'OwnerApplyOrderDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      ownerApplyOrderDetail: GetOwnerApplyOrderDetailResponseBodyOwnerApplyOrderDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ownerApplyOrderDetail && typeof (this.ownerApplyOrderDetail as any).validate === 'function') {
      (this.ownerApplyOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

