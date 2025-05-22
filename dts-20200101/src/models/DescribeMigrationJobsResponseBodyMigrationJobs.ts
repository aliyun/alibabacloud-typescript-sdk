// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob";


export class DescribeMigrationJobsResponseBodyMigrationJobs extends $dara.Model {
  migrationJob?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob[];
  static names(): { [key: string]: string } {
    return {
      migrationJob: 'MigrationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJob: { 'type': 'array', 'itemType': DescribeMigrationJobsResponseBodyMigrationJobsMigrationJob },
    };
  }

  validate() {
    if(Array.isArray(this.migrationJob)) {
      $dara.Model.validateArray(this.migrationJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

