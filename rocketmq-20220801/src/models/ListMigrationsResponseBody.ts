// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationsResponseBodyDataListCurrentStage extends $dara.Model {
  /**
   * @example
   * []
   */
  stageData?: any;
  /**
   * @example
   * DOING
   */
  stageStatus?: string;
  /**
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
   * @example
   * []
   */
  sourceData?: any;
  /**
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
   * @example
   * []
   */
  targetData?: any;
  /**
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
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  currentStage?: ListMigrationsResponseBodyDataListCurrentStage;
  /**
   * @example
   * 21
   */
  migrationId?: number;
  /**
   * @example
   * xxx
   */
  migrationName?: string;
  migrationSource?: ListMigrationsResponseBodyDataListMigrationSource;
  /**
   * @example
   * MIGRATING
   */
  migrationStatus?: string;
  migrationTarget?: ListMigrationsResponseBodyDataListMigrationTarget;
  /**
   * @example
   * INSTANCE_MIGRATION
   */
  migrationType?: string;
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
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
  list?: ListMigrationsResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 3
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
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: ListMigrationsResponseBodyData;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * E5897B2E-C3AC-56DC-A482-F0E9E53F48D5
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

