// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactTemplateId?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

