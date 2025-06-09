// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ETLConfiguration } from "./Etlconfiguration";


export class UpdateETLRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is update
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
      configuration: ETLConfiguration,
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

