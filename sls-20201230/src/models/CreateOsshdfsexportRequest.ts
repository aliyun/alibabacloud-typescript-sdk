// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSExportConfiguration } from "./OssexportConfiguration";


export class CreateOSSHDFSExportRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the job.
   * 
   * This parameter is required.
   */
  configuration?: OSSExportConfiguration;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * Create a Unit OSS-HDFS delivery task
   */
  description?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * my-oss-hdfs-job
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the job. The name must be unique within the project and follow these conventions:
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
   * export-osshdfs-1234567890-123456
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

