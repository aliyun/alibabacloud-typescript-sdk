// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AzureBlobIngestionConfiguration } from "./AzureBlobIngestionConfiguration";
import { Schedule } from "./Schedule";


export class UpdateAzureBlobIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The updated configuration for the Azure Blob ingestion task.
   * 
   * This parameter is required.
   */
  configuration?: AzureBlobIngestionConfiguration;
  /**
   * @remarks
   * The updated description for the Azure Blob ingestion task.
   */
  description?: string;
  /**
   * @remarks
   * The updated display name for the Azure Blob ingestion task.
   * 
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * The updated ingestion schedule.
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
      configuration: AzureBlobIngestionConfiguration,
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

