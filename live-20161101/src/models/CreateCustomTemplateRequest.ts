// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the template. The value is in the following JSON format: {height:xxx,scale:xxx,gop:xxx,bframes:xxx,cdesc:xxx}. All fields are required. If any field is left empty, the call fails.
   * 
   * >  For more information, see **Fields of the CustomTemplate parameter**.
   * 
   * This parameter is required.
   * 
   * @example
   * {height:1080,scale:[16:9],gop:60,bframes:30,cdesc:h264}
   */
  customTemplate?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * > Record the template name. The template name is required if you want to use, query, or delete the template.
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

