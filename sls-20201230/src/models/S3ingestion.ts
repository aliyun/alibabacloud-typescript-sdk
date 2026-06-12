// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { S3IngestionConfiguration } from "./S3ingestionConfiguration";
import { Schedule } from "./Schedule";


export class S3Ingestion extends $dara.Model {
  /**
   * @remarks
   * S3 import configuration
   */
  configuration?: S3IngestionConfiguration;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1714360481
   */
  createTime?: number;
  /**
   * @remarks
   * Job description
   * 
   * @example
   * s3 ingestion
   */
  description?: string;
  /**
   * @remarks
   * Job display name
   * 
   * This parameter is required.
   * 
   * @example
   * s3 ingestion
   */
  displayName?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 1714360481
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * Task Name
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-s3-123456
   */
  name?: string;
  /**
   * @remarks
   * Scan Configuration
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @remarks
   * Import Status
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
      configuration: S3IngestionConfiguration,
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

