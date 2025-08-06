// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The new information about the one or more images. You can modify the information about up to 20 images at a time. For more information about the parameter structure, see the **UpdateContent** section.
   * 
   * >  The values of the nested parameters Title, Description, and Tags under the UpdateContent parameter cannot contain emoticons.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ImageId":"ff8fe57e3461416c6a267a4e09****","Title":"test title","Description":"test description","Tags":"tag1,tag2"}]
   */
  updateContent?: string;
  static names(): { [key: string]: string } {
    return {
      updateContent: 'UpdateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

