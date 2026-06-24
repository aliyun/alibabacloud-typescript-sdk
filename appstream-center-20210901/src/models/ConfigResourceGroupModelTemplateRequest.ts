// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigResourceGroupModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The model group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

