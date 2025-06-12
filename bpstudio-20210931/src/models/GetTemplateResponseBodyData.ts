// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateResponseBodyDataVariables } from "./GetTemplateResponseBodyDataVariables";


export class GetTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-09-22 17:08:31
   */
  createTime?: string;
  /**
   * @remarks
   * Template Description
   * 
   * @example
   * remark
   */
  description?: string;
  /**
   * @remarks
   * The path to the template schema image file
   * 
   * @example
   * bp-studio-template/sr-U37UD2YQCRJ75X5V.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the template
   * 
   * @example
   * cadt-template
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * XFKR6WYRVS24S07R
   */
  templateId?: string;
  /**
   * @remarks
   * The details of the template variables.
   */
  variables?: GetTemplateResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'array', 'itemType': GetTemplateResponseBodyDataVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

