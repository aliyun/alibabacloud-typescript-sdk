// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorityTemplateResponseBodyAuthorityTemplateView extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the permission template.
   * 
   * @example
   * 12***
   */
  creatorId?: number;
  /**
   * @remarks
   * The description of the permission template.
   * 
   * @example
   * This template is used for business testing.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission template.
   * 
   * @example
   * Test template.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the permission template.
   * 
   * @example
   * 1563
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      description: 'Description',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'number',
      description: 'string',
      name: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

