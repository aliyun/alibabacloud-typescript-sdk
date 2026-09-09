// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledSQLConfiguration } from "./ScheduledSqlconfiguration";
import { Schedule } from "./Schedule";


export class CreateScheduledSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the job.
   * 
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * Create a scheduled SQL task
   */
  description?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-scheduled-sql
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the job. The naming rules are as follows:
   * 
   * Job names must be unique within the same project.
   * * The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * * The name must start and end with a lowercase letter or digit.
   * * The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * sql-123456789-123456
   */
  name?: string;
  /**
   * @remarks
   * The scheduling configuration of the job.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ScheduledSQLConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
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

