// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollationTimeZoneResponseBody extends $dara.Model {
  collation?: string;
  DBInstanceId?: string;
  requestId?: string;
  taskId?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      collation: 'Collation',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collation: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

