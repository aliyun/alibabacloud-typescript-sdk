// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSExportConfiguration } from "./OssexportConfiguration";


export class CreateOSSHDFSExportRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration details of the job.
   * 
   * This parameter is required.
   */
  configuration?: OSSExportConfiguration;
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
   * 
   * @example
   * ali-test-oss-hdfs-job
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier of the OSS data shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * job-123456789-123456
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

