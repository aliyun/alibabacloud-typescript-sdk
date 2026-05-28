// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledSQLConfiguration } from "./ScheduledSqlconfiguration";
import { Schedule } from "./Schedule";


export class ScheduledSQL extends $dara.Model {
  /**
   * @remarks
   * The configuration of the Scheduled SQL job.
   * 
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  /**
   * @remarks
   * The time when the Scheduled SQL job was created.
   * 
   * @example
   * 1714123644
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the scheduled SQL job.
   * 
   * @example
   * This is a scheduled sql job
   */
  description?: string;
  /**
   * @remarks
   * The display name of the scheduled SQL job.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a scheduled sql job
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the Scheduled SQL job was last modified.
   * 
   * @example
   * 1714123644
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The name of the scheduled SQL job.
   * 
   * This parameter is required.
   * 
   * @example
   * test-scheduled-sql
   */
  name?: string;
  /**
   * @remarks
   * The scheduling settings of the Scheduled SQL job.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @remarks
   * The ID of the scheduler.
   * 
   * @example
   * e73f43732852064ad5d091914e39342f
   */
  scheduleId?: string;
  /**
   * @remarks
   * The status of the Scheduled SQL job.
   * 
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

