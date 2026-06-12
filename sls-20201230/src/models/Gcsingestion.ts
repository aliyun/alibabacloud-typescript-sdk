// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfiguration } from "./GcsingestionConfiguration";


export class GCSIngestion extends $dara.Model {
  /**
   * @remarks
   * The GCS ingestion configuration.
   * 
   * This parameter is required.
   */
  configuration?: GCSIngestionConfiguration;
  /**
   * @remarks
   * Output only. The creation time of the job, as a Unix timestamp.
   * 
   * @example
   * 1714360481
   */
  createTime?: number;
  /**
   * @remarks
   * A user-friendly description for the job.
   * 
   * @example
   * gcs ingestion
   */
  description?: string;
  /**
   * @remarks
   * The display name for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * gcs ingestion
   */
  displayName?: string;
  /**
   * @remarks
   * Output only. The last modified time of the job, as a Unix timestamp.
   * 
   * @example
   * 1714360581
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-gcs-123456
   */
  name?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @remarks
   * Output only. The ingestion status.
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
      configuration: GCSIngestionConfiguration,
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

