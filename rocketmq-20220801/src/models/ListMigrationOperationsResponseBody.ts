// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationOperationsResponseBodyDataListOperationParam extends $dara.Model {
  /**
   * @example
   * []
   */
  paramData?: any;
  static names(): { [key: string]: string } {
    return {
      paramData: 'paramData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBodyDataListOperationResult extends $dara.Model {
  /**
   * @example
   * []
   */
  resultData?: any;
  static names(): { [key: string]: string } {
    return {
      resultData: 'resultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultData: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * CONNECT_PENDING
   */
  businessStatus?: string;
  /**
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  migrationId?: number;
  /**
   * @example
   * 183
   */
  operationId?: number;
  /**
   * @example
   * xx
   */
  operationKey?: string;
  operationParam?: ListMigrationOperationsResponseBodyDataListOperationParam;
  operationResult?: ListMigrationOperationsResponseBodyDataListOperationResult;
  /**
   * @example
   * DOING
   */
  operationStatus?: string;
  /**
   * @example
   * IMPORT_CONSUMER_GROUP
   */
  operationType?: string;
  /**
   * @example
   * CONNECT_NETWORK
   */
  stageType?: string;
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'businessStatus',
      createTime: 'createTime',
      migrationId: 'migrationId',
      operationId: 'operationId',
      operationKey: 'operationKey',
      operationParam: 'operationParam',
      operationResult: 'operationResult',
      operationStatus: 'operationStatus',
      operationType: 'operationType',
      stageType: 'stageType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      createTime: 'string',
      migrationId: 'number',
      operationId: 'number',
      operationKey: 'string',
      operationParam: ListMigrationOperationsResponseBodyDataListOperationParam,
      operationResult: ListMigrationOperationsResponseBodyDataListOperationResult,
      operationStatus: 'string',
      operationType: 'string',
      stageType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.operationParam && typeof (this.operationParam as any).validate === 'function') {
      (this.operationParam as any).validate();
    }
    if(this.operationResult && typeof (this.operationResult as any).validate === 'function') {
      (this.operationResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBodyData extends $dara.Model {
  list?: ListMigrationOperationsResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMigrationOperationsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationOperationsResponseBody extends $dara.Model {
  /**
   * @example
   * Instance.NotFound
   */
  code?: string;
  data?: ListMigrationOperationsResponseBodyData;
  /**
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * The topic already exists.
   */
  message?: string;
  /**
   * @example
   * C7E8AE3A-219B-52EE-BE32-4036F5F88833
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListMigrationOperationsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

