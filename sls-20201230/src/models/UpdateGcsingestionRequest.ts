// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfiguration } from "./GcsingestionConfiguration";


export class UpdateGCSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the ingestion task.
   * 
   * This parameter is required.
   */
  configuration?: GCSIngestionConfiguration;
  /**
   * @remarks
   * The description of the ingestion task.
   * 
   * @example
   * Gcs import
   */
  description?: string;
  /**
   * @remarks
   * The display name of the ingestion task.
   * 
   * This parameter is required.
   * 
   * @example
   * Gcs import
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
      configuration: GCSIngestionConfiguration,
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

