// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions extends $dara.Model {
  migrationOption?: string[];
  static names(): { [key: string]: string } {
    return {
      migrationOption: 'MigrationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationOption: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.migrationOption)) {
      $dara.Model.validateArray(this.migrationOption);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

