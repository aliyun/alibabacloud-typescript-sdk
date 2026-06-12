// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfiguration } from "./GcsingestionConfiguration";


export class CreateGCSIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The ingestion configuration.
   * 
   * This parameter is required.
   */
  configuration?: GCSIngestionConfiguration;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The job name. Must be unique within the same project. Naming rules:
   * 
   * - Can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - Must start and end with a lowercase letter or digit.
   * 
   * - Must be 2 to 64 characters in length.
   * 
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

