// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * OpenTemplateBizId
   * 
   * @example
   * OpenTemplateBizId
   */
  openTemplateBizId?: string;
  /**
   * @remarks
   * OpenTemplateBizId
   * 
   * @example
   * OpenTemplateBizId
   */
  openTemplateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      openTemplateBizId: 'OpenTemplateBizId',
      openTemplateId: 'OpenTemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTemplateBizId: 'string',
      openTemplateId: 'string',
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

