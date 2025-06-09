// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSExportConfiguration } from "./OssexportConfiguration";


export class UpdateOSSExportRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration details of the job.
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
   * @example
   * ali-test-oss-job
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
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

