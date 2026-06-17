// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarClawConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The path to the configuration section to retrieve, specified in JSONPath dot notation. If this parameter is empty, the entire configuration is returned.
   * 
   * @example
   * models
   */
  configPath?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      configPath: 'ConfigPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      configPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

