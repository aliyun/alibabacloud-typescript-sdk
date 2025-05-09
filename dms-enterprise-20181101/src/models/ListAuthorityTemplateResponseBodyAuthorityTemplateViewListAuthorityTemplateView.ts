// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorityTemplateResponseBodyAuthorityTemplateViewListAuthorityTemplateView extends $dara.Model {
  /**
   * @example
   * 2023-10-26 11:37:47
   */
  createTime?: string;
  /**
   * @example
   * 522****
   */
  creatorId?: number;
  description?: string;
  name?: string;
  /**
   * @example
   * 2592
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

