// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainTranscodeParamsRequest extends $dara.Model {
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  app?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pushdomain?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      app: 'app',
      pushdomain: 'pushdomain',
      templateName: 'template_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      app: 'string',
      pushdomain: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

