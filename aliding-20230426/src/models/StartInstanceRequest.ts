// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * 18295
   */
  departmentId?: string;
  /**
   * @example
   * {}
   */
  formDataJson?: string;
  /**
   * @example
   * FORM-EF6Yxxx
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * TPROC--EF6Y4xxx
   */
  processCode?: string;
  processData?: string;
  /**
   * @example
   * hexxyy
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      departmentId: 'DepartmentId',
      formDataJson: 'FormDataJson',
      formUuid: 'FormUuid',
      language: 'Language',
      processCode: 'ProcessCode',
      processData: 'ProcessData',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      departmentId: 'string',
      formDataJson: 'string',
      formUuid: 'string',
      language: 'string',
      processCode: 'string',
      processData: 'string',
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

