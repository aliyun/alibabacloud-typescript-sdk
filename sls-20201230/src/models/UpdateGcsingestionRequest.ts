// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfiguration } from "./GcsingestionConfiguration";


export class UpdateGCSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: GCSIngestionConfiguration;
  description?: string;
  /**
   * @remarks
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

