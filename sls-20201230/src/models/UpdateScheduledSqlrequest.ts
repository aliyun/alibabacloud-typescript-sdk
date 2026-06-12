// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledSQLConfiguration } from "./ScheduledSqlconfiguration";
import { Schedule } from "./Schedule";


export class UpdateScheduledSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the task.
   * 
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * Update scheduled SQL task
   */
  description?: string;
  /**
   * @remarks
   * The display name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-scheduled-sql
   */
  displayName?: string;
  /**
   * @remarks
   * The scheduling configuration of the task.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ScheduledSQLConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
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

