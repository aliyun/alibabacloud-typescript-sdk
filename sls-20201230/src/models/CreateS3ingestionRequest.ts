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
   * The task description.
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
   * The job name. The naming rules are as follows:
   * 
   * Job names must be unique within the same project.
   * * Can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * * Must start and end with a lowercase letter or digit.
   * * Must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The scheduling structure.
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

