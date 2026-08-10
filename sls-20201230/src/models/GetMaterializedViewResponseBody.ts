// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterializedViewResponseBodyStatus extends $dara.Model {
  lastRunError?: string;
  lastRunTime?: number;
  maxCursorTime?: number;
  static names(): { [key: string]: string } {
    return {
      lastRunError: 'lastRunError',
      lastRunTime: 'lastRunTime',
      maxCursorTime: 'maxCursorTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastRunError: 'string',
      lastRunTime: 'number',
      maxCursorTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterializedViewResponseBody extends $dara.Model {
  aggIntervalMins?: number;
  enabled?: boolean;
  logstore?: string;
  name?: string;
  originalSql?: string;
  startTime?: number;
  status?: GetMaterializedViewResponseBodyStatus;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
      enabled: 'enabled',
      logstore: 'logstore',
      name: 'name',
      originalSql: 'originalSql',
      startTime: 'startTime',
      status: 'status',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggIntervalMins: 'number',
      enabled: 'boolean',
      logstore: 'string',
      name: 'string',
      originalSql: 'string',
      startTime: 'number',
      status: GetMaterializedViewResponseBodyStatus,
      ttl: 'number',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

