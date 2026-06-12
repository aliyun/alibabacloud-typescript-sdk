// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ESIngestionConfiguration } from "./EsingestionConfiguration";
import { Schedule } from "./Schedule";


export class UpdateElasticsearchIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * ES or OpenSearch ingestion configuration
   * 
   * This parameter is required.
   */
  configuration?: ESIngestionConfiguration;
  /**
   * @remarks
   * Description of the ES or OpenSearch ingestion task
   * 
   * @example
   * es ingestion test
   */
  description?: string;
  /**
   * @remarks
   * Display name of the ES or OpenSearch ingestion task
   * 
   * This parameter is required.
   * 
   * @example
   * es-ingestion-test
   */
  displayName?: string;
  /**
   * @remarks
   * Scheduling type. Leave this field empty unless you need strict scheduling. For example, to run the ingestion task every Monday at 8:00 a.m., use a cron expression
   */
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ESIngestionConfiguration,
      description: 'string',
      displayName: 'string',
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

