// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSIngestionConfiguration } from "./OssingestionConfiguration";
import { Schedule } from "./Schedule";


export class UpdateOSSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the OSS import task.
   * 
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  /**
   * @remarks
   * The description of the OSS import task.
   * 
   * @example
   * OSS import
   */
  description?: string;
  /**
   * @remarks
   * The display name of the OSS import task.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS import
   */
  displayName?: string;
  /**
   * @remarks
   * The schedule of the task. This parameter is optional. To run the task at a fixed time, such as 08:00 every Monday, use a cron expression.
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
      configuration: OSSIngestionConfiguration,
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

