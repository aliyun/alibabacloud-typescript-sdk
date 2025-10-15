// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 应用模板id
   * 
   * This parameter is required.
   * 
   * @example
   * apt_ramuser_xxxx
   */
  applicationTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

