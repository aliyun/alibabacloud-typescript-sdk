// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMigrationJobRequestMigrationJobList } from "./CreateMigrationJobRequestMigrationJobList";


export class CreateMigrationJobRequest extends $dara.Model {
  migrationJobList?: CreateMigrationJobRequestMigrationJobList[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      migrationJobList: 'migrationJobList',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationJobList: { 'type': 'array', 'itemType': CreateMigrationJobRequestMigrationJobList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.migrationJobList)) {
      $dara.Model.validateArray(this.migrationJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

