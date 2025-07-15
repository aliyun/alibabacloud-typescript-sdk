// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomTemplateRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the template that you want to delete. The value is a string.
   * 
   * This parameter is required.
   * 
   * @example
   * TestTemplate
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

