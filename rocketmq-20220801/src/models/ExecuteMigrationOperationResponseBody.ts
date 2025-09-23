// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMigrationOperationResponseBodyDataOperationParam extends $dara.Model {
  /**
   * @example
   * {}
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

export class ExecuteMigrationOperationResponseBodyDataOperationResult extends $dara.Model {
  /**
   * @example
   * {}
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

export class ExecuteMigrationOperationResponseBodyData extends $dara.Model {
  /**
   * @example
   * MIGRATE_WAIT
   */
  businessStatus?: string;
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @example
   * 6
   */
  migrationId?: number;
  /**
   * @example
   * 110
   */
  operationId?: number;
  /**
   * @example
   * group01
   */
  operationKey?: string;
  operationParam?: ExecuteMigrationOperationResponseBodyDataOperationParam;
  operationResult?: ExecuteMigrationOperationResponseBodyDataOperationResult;
  /**
   * @example
   * DONE
   */
  operationStatus?: string;
  /**
   * @example
   * CONNECT_NETWORK
   */
  operationType?: string;
  /**
   * @example
   * MIGRATE_METADATA
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
      operationParam: ExecuteMigrationOperationResponseBodyDataOperationParam,
      operationResult: ExecuteMigrationOperationResponseBodyDataOperationResult,
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

export class ExecuteMigrationOperationResponseBody extends $dara.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: ExecuteMigrationOperationResponseBodyData;
  /**
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @example
   * instanceId
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
   * 814BCD66-2D76-5080-AAD2-E50E5BDB0995
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
      data: ExecuteMigrationOperationResponseBodyData,
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

