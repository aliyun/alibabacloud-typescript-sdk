// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConsumeProcessorConfiguration } from "./ConsumeProcessorConfiguration";


export class PutConsumeProcessorRequest extends $dara.Model {
  /**
   * @remarks
   * Consumption processor configuration.
   * 
   * This parameter is required.
   */
  configuration?: ConsumeProcessorConfiguration;
  /**
   * @remarks
   * The description.
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * filter-get-request
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
      configuration: ConsumeProcessorConfiguration,
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

