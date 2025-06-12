// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2021-03-18 16:41:31
   */
  createTime?: string;
  /**
   * @remarks
   * The URL of the architecture image.
   * 
   * @example
   * bp-studio-template/sr-U37UD2YQCRJ75X5V.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * cadt-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tag that is added to the template.
   * 
   * @example
   * 1
   */
  tagId?: number;
  /**
   * @remarks
   * The name of the tag that is added to the template.
   * 
   * @example
   * Official template
   */
  tagName?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * CJQ6H0XUEQ20IYJQ
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tagId: 'TagId',
      tagName: 'TagName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tagId: 'number',
      tagName: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

