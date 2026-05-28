// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSIngestionConfiguration } from "./OssingestionConfiguration";
import { Schedule } from "./Schedule";


export class OSSIngestion extends $dara.Model {
  /**
   * @remarks
   * The configurations of the OSS data import job.
   * 
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  /**
   * @remarks
   * The time when the data import job was created.
   * 
   * @example
   * 1714360481
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the data import job.
   * 
   * @example
   * oss ingestion
   */
  description?: string;
  /**
   * @remarks
   * The display name of the data import job.
   * 
   * This parameter is required.
   * 
   * @example
   * oss ingestion
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the data import job was last modified.
   * 
   * @example
   * 1714360481
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The name of the data import job.
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-oss-123456
   */
  name?: string;
  /**
   * @remarks
   * The scheduling settings.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @remarks
   * The ID of the data import job.
   * 
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @remarks
   * The status of the data import job.
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
      schedule: 'schedule',
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSIngestionConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      schedule: Schedule,
      scheduleId: 'string',
      status: 'string',
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

