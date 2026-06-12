// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSIngestionConfiguration } from "./OssingestionConfiguration";
import { Schedule } from "./Schedule";


export class CreateOSSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS import configuration.
   * 
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Task description
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS import
   */
  displayName?: string;
  /**
   * @remarks
   * The job name. The naming conventions are as follows:
   * 
   * The job name must be unique within the project.
   * 
   * - The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - The name must start and end with a lowercase letter or a digit.
   * 
   * - The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-oss-123456
   */
  name?: string;
  /**
   * @remarks
   * The scheduling configuration. This parameter is optional. To meet specific timing requirements, such as importing data at 8:00 AM every Monday, use a cron expression.
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

