// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AzureBlobIngestionConfiguration } from "./AzureBlobIngestionConfiguration";
import { Schedule } from "./Schedule";


export class UpdateAzureBlobIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: AzureBlobIngestionConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
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

