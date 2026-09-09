// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AzureBlobIngestionConfiguration } from "./AzureBlobIngestionConfiguration";
import { Schedule } from "./Schedule";


export class AzureBlobIngestion extends $dara.Model {
  /**
   * @remarks
   * The Azure Blob file import configuration.
   * 
   * This parameter is required.
   */
  configuration?: AzureBlobIngestionConfiguration;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1714360481
   */
  createTime?: number;
  /**
   * @remarks
   * job description
   * 
   * @example
   * azure blob ingestion
   */
  description?: string;
  /**
   * @remarks
   * job displayName
   * 
   * This parameter is required.
   * 
   * @example
   * azure blob ingestion
   */
  displayName?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 1714360481
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The name of the import task.
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-azure-blob-123456
   */
  name?: string;
  /**
   * @remarks
   * The write processor ID.
   * 
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * The scheduling configuration.
   * 
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @remarks
   * The import status.
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
      processorId: 'processorId',
      schedule: 'schedule',
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AzureBlobIngestionConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      processorId: 'string',
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

