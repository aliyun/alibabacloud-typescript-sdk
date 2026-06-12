// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ESIngestionConfiguration } from "./EsingestionConfiguration";
import { Schedule } from "./Schedule";


export class CreateElasticsearchIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the ES or OpenSearch import job.
   * 
   * This parameter is required.
   */
  configuration?: ESIngestionConfiguration;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * es ingestion
   */
  description?: string;
  /**
   * @remarks
   * The display name of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * es ingestion
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier of the ES or OpenSearch import job.
   * 
   * This parameter is required.
   * 
   * @example
   * ingest-elasticsearch- 123456-123
   */
  name?: string;
  /**
   * @remarks
   * The schedule structure.
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
      configuration: ESIngestionConfiguration,
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

