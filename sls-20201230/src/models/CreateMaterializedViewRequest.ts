// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaterializedViewRequest extends $dara.Model {
  aggIntervalMins?: number;
  logstore?: string;
  name?: string;
  originalSql?: string;
  startTime?: number;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
      logstore: 'logstore',
      name: 'name',
      originalSql: 'originalSql',
      startTime: 'startTime',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggIntervalMins: 'number',
      logstore: 'string',
      name: 'string',
      originalSql: 'string',
      startTime: 'number',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

