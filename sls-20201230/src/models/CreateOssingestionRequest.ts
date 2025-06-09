// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSIngestionConfiguration } from "./OssingestionConfiguration";
import { Schedule } from "./Schedule";


export class CreateOSSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the OSS data import job.
   * 
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  /**
   * @remarks
   * The description of the job.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the OSS data import job.
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-oss-123456
   */
  name?: string;
  /**
   * @remarks
   * The scheduling type. By default, you do not need to specify this parameter. If you want to import data at regular intervals, such as importing data every Monday at 08: 00., you can specify a cron expression.
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
      configuration: OSSIngestionConfiguration,
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

