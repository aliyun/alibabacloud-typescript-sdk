// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationsResponseBodyDataListCurrentStage extends $dara.Model {
  /**
   * @remarks
   * The stage data.
   * 
   * @example
   * []
   */
  stageData?: any;
  /**
   * @remarks
   * The stage status. Valid values:
   *  - INIT: Not started.
   *  - DOING: In progress.
   *  - DONE: Completed.
   * 
   * @example
   * DOING
   */
  stageStatus?: string;
  /**
   * @remarks
   * The stage type. Valid values:
   *  - CONNECT_NETWORK: Network connection.
   *  - MIGRATE_METADATA: Metadata migration.
   *  - REPLACE_ENDPOINT: Endpoint replacement.
   *  - MIGRATE_MESSAGE: Message migration.
   * 
   * @example
   * MIGRATE_METADATA
   */
  stageType?: string;
  static names(): { [key: string]: string } {
    return {
      stageData: 'stageData',
      stageStatus: 'stageStatus',
      stageType: 'stageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageData: 'any',
      stageStatus: 'string',
      stageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationsResponseBodyDataListMigrationSource extends $dara.Model {
  /**
   * @remarks
   * The migration source data.
   * 
   * @example
   * {
   * "clusterType":"INTERNET_NETWORK",
   * "aclType":"NONE",
   * "clusterName":"test",
   * "namesrvAddrList":"47.110.248.xxx:9876"],
   * "brokerObtainMethod":"AUTO_OBTAIN"
   * }
   */
  sourceData?: any;
  /**
   * @remarks
   * The migration source type. Valid values:
   *  - EXTERNAL_INSTANCE: External instance.
   *  - INTERNAL_INSTANCE: Alibaba Cloud 5.0 instance.
   * 
   * @example
   * EXTERNAL_INSTANCE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceData: 'sourceData',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceData: 'any',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationsResponseBodyDataListMigrationTarget extends $dara.Model {
  /**
   * @remarks
   * The migration target data.
   * 
   * @example
   * {
   * "clusterType":"ROCKETMQ_V5",
   * "instanceId":"rmq-cn-778429mp301",
   * "regionId":"cn-hangzhou"
   * }
   */
  targetData?: any;
  /**
   * @remarks
   * The migration target type. Valid values:
   *  - INTERNAL_INSTANCE: Alibaba Cloud 5.0 instance.
   * 
   * @example
   * INTERNAL_INSTANCE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetData: 'targetData',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetData: 'any',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The creation time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The current migration stage.
   */
  currentStage?: ListMigrationsResponseBodyDataListCurrentStage;
  /**
   * @remarks
   * The migration ID.
   * 
   * @example
   * 21
   */
  migrationId?: number;
  /**
   * @remarks
   * The migration name.
   * 
   * @example
   * xxx
   */
  migrationName?: string;
  /**
   * @remarks
   * The migration source.
   */
  migrationSource?: ListMigrationsResponseBodyDataListMigrationSource;
  /**
   * @remarks
   * The migration status. Valid values:
   *  - CREATED: Created.
   *  - MIGRATING: Migrating.
   *  - COMPLETED: Completed.
   *  - CANCELLED: Cancelled.
   * 
   * @example
   * MIGRATING
   */
  migrationStatus?: string;
  /**
   * @remarks
   * The migration target.
   */
  migrationTarget?: ListMigrationsResponseBodyDataListMigrationTarget;
  /**
   * @remarks
   * The migration type. Valid values:
   *  - INSTANCE_MIGRATION: instance migration
   * 
   * @example
   * INSTANCE_MIGRATION
   */
  migrationType?: string;
  /**
   * @remarks
   * The modification time, in YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      currentStage: 'currentStage',
      migrationId: 'migrationId',
      migrationName: 'migrationName',
      migrationSource: 'migrationSource',
      migrationStatus: 'migrationStatus',
      migrationTarget: 'migrationTarget',
      migrationType: 'migrationType',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      currentStage: ListMigrationsResponseBodyDataListCurrentStage,
      migrationId: 'number',
      migrationName: 'string',
      migrationSource: ListMigrationsResponseBodyDataListMigrationSource,
      migrationStatus: 'string',
      migrationTarget: ListMigrationsResponseBodyDataListMigrationTarget,
      migrationType: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.currentStage && typeof (this.currentStage as any).validate === 'function') {
      (this.currentStage as any).validate();
    }
    if(this.migrationSource && typeof (this.migrationSource as any).validate === 'function') {
      (this.migrationSource as any).validate();
    }
    if(this.migrationTarget && typeof (this.migrationTarget as any).validate === 'function') {
      (this.migrationTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The paged data.
   */
  list?: ListMigrationsResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
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
      list: { 'type': 'array', 'itemType': ListMigrationsResponseBodyDataList },
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

export class ListMigrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListMigrationsResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
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
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5897B2E-C3AC-56DC-A482-F0E9E53F48D5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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
      data: ListMigrationsResponseBodyData,
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

