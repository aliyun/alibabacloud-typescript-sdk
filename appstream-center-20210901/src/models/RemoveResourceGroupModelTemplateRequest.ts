// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveResourceGroupModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

