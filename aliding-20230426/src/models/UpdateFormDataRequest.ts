// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFormDataRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKTxxx
   */
  appType?: string;
  /**
   * @example
   * FORM_INxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @example
   * {}
   */
  updateFormDataJson?: string;
  /**
   * @example
   * false
   */
  useLatestVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formInstanceId: 'FormInstanceId',
      language: 'Language',
      systemToken: 'SystemToken',
      updateFormDataJson: 'UpdateFormDataJson',
      useLatestVersion: 'UseLatestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceId: 'string',
      language: 'string',
      systemToken: 'string',
      updateFormDataJson: 'string',
      useLatestVersion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

