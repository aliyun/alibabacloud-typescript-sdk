// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSExportConfiguration } from "./OssexportConfiguration";


export class OSSExport extends $dara.Model {
  /**
   * @remarks
   * The OSS export configuration.
   */
  configuration?: OSSExportConfiguration;
  /**
   * @remarks
   * The time when the OSS data shipping job was created.
   * 
   * @example
   * 123456789
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the OSS data shipping job.
   * 
   * @example
   * This is a oss export
   */
  description?: string;
  /**
   * @remarks
   * The display name of the OSS data shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a oss export
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the OSS data shipping job was last modified.
   * 
   * @example
   * 123456789
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The name of the OSS data shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * myossexportjob
   */
  name?: string;
  /**
   * @remarks
   * The ID of the OSS data shipping job.
   * 
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @remarks
   * The status of the OSS data shipping job.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      scheduleId: 'string',
      status: 'string',
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

