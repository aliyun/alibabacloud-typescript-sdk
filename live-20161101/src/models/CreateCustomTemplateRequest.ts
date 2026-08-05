// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template configuration in JSON format. The value must be in the following format: {height:xxx,scale:xxx,gop:xxx,bframes:xxx,cdesc:xxx}. All fields are required. The call fails if any field is missing.
   * 
   * > For more information about the parameters, see the **CustomTemplate details** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"height":"1060","scale":"[16:9]","gop":"60","bframes":"30","cdesc":"h264"}
   */
  customTemplate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the template to add.
   * 
   * > Record the template name after you create it. The name is required for subsequent operations, such as using, querying, and deleting the template.
   * 
   * This parameter is required.
   * 
   * @example
   * TestTemplate
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplate: 'CustomTemplate',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplate: 'string',
      ownerId: 'number',
      regionId: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

