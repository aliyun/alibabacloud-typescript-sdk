// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfiguration } from "./GcsingestionConfiguration";


export class CreateGCSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: GCSIngestionConfiguration;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GCSIngestionConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
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

