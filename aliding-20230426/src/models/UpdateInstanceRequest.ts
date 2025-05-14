// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
  processInstanceId?: string;
  /**
   * @example
   * hexxyy
   */
  systemToken?: string;
  /**
   * @example
   * {}
   */
  updateFormDataJson?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      language: 'Language',
      processInstanceId: 'ProcessInstanceId',
      systemToken: 'SystemToken',
      updateFormDataJson: 'UpdateFormDataJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      language: 'string',
      processInstanceId: 'string',
      systemToken: 'string',
      updateFormDataJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

