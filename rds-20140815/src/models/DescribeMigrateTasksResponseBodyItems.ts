// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrateTasksResponseBodyItemsMigrateTask } from "./DescribeMigrateTasksResponseBodyItemsMigrateTask";


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

