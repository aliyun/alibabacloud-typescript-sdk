// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IngestProcessorConfiguration } from "./IngestProcessorConfiguration";


export class PutIngestProcessorRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the ingest processor.
   * 
   * This parameter is required.
   */
  configuration?: IngestProcessorConfiguration;
  /**
   * @remarks
   * The description of the ingest processor.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the ingest processor.
   * 
   * This parameter is required.
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: IngestProcessorConfiguration,
      description: 'string',
      displayName: 'string',
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

