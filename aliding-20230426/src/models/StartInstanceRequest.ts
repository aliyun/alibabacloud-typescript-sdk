// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  appType?: string;
  departmentId?: string;
  formDataJson?: string;
  formUuid?: string;
  language?: string;
  processCode?: string;
  processData?: string;
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

