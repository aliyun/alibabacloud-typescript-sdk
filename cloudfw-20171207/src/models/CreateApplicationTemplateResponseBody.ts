// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created application template.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

