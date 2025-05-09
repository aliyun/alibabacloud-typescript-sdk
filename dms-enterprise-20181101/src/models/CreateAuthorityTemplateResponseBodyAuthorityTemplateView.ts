// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorityTemplateResponseBodyAuthorityTemplateView extends $dara.Model {
  /**
   * @remarks
   * The time when the permission template was created. The time is in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-01-11 14:17:33
   */
  createTime?: string;
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
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
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

