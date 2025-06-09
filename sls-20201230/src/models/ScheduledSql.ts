// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledSQLConfiguration } from "./ScheduledSqlconfiguration";
import { Schedule } from "./Schedule";


export class ScheduledSQL extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  /**
   * @example
   * 1714123644
   */
  createTime?: number;
  /**
   * @example
   * schedule-sql-test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scheduleSqlTest
   */
  displayName?: string;
  /**
   * @example
   * 1714123644
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sql-1714123463-225223
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @example
   * e73f43732852064ad5d091914e39342f
   */
  scheduleId?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      schedule: 'schedule',
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ScheduledSQLConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      schedule: Schedule,
      scheduleId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

