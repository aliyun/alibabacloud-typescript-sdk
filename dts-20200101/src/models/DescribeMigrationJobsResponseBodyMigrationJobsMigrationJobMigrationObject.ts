// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject";


export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObject extends $dara.Model {
  synchronousObject?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject[];
  static names(): { [key: string]: string } {
    return {
      synchronousObject: 'SynchronousObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synchronousObject: { 'type': 'array', 'itemType': DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject },
    };
  }

  validate() {
    if(Array.isArray(this.synchronousObject)) {
      $dara.Model.validateArray(this.synchronousObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

