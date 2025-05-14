// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveFormDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKxxx
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\"textField_jcpm6agt\": \"单行\",\"employeeField_jcos0sar\": [\"workno\"]}
   */
  formDataJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formDataJson: 'FormDataJson',
      formUuid: 'FormUuid',
      language: 'Language',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formDataJson: 'string',
      formUuid: 'string',
      language: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

