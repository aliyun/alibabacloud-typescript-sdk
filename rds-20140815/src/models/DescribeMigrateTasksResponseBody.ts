// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrateTasksResponseBodyItemsMigrateTask extends $dara.Model {
  backupMode?: string;
  createTime?: string;
  DBName?: string;
  description?: string;
  endTime?: string;
  isDBReplaced?: string;
  migrateTaskId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      createTime: 'CreateTime',
      DBName: 'DBName',
      description: 'Description',
      endTime: 'EndTime',
      isDBReplaced: 'IsDBReplaced',
      migrateTaskId: 'MigrateTaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      createTime: 'string',
      DBName: 'string',
      description: 'string',
      endTime: 'string',
      isDBReplaced: 'string',
      migrateTaskId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponseBodyItems extends $dara.Model {
  migrateTask?: DescribeMigrateTasksResponseBodyItemsMigrateTask[];
  static names(): { [key: string]: string } {
    return {
      migrateTask: 'MigrateTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateTask: { 'type': 'array', 'itemType': DescribeMigrateTasksResponseBodyItemsMigrateTask },
    };
  }

  validate() {
    if(Array.isArray(this.migrateTask)) {
      $dara.Model.validateArray(this.migrateTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponseBody extends $dara.Model {
  DBInstanceId?: string;
  items?: DescribeMigrateTasksResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: DescribeMigrateTasksResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

