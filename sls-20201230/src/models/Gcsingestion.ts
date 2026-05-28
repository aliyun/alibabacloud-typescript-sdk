// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfiguration } from "./GcsingestionConfiguration";


export class GCSIngestion extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: GCSIngestionConfiguration;
  /**
   * @example
   * 1714360481
   */
  createTime?: number;
  /**
   * @remarks
   * job description
   * 
   * @example
   * gcs ingestion
   */
  description?: string;
  /**
   * @remarks
   * job displayName
   * 
   * This parameter is required.
   * 
   * @example
   * gcs ingestion
   */
  displayName?: string;
  /**
   * @example
   * 1714360581
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-gcs-123456
   */
  name?: string;
  /**
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
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

