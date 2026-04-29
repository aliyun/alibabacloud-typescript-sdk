// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarClawConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
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

