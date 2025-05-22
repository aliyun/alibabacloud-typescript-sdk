// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag";


export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTags extends $dara.Model {
  tag?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

