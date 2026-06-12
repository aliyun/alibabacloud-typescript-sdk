// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { S3IngestionConfiguration } from "./S3ingestionConfiguration";
import { Schedule } from "./Schedule";


export class CreateS3IngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   */
  configuration?: S3IngestionConfiguration;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the job. Follow these naming rules:
   * 
   * Each job in the same project must have a unique name.
   * 
   * - Use only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - Start and end with a lowercase letter or digit.
   * 
   * - Be 2 to 64 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
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
      configuration: S3IngestionConfiguration,
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

