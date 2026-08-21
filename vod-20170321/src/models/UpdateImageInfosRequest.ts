// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The update content. You can modify the information of up to 20 images at a time. For the parameter structure, see the **UpdateContent** table below.
   * 
   * > - The Title, Description, and Tags fields cannot contain emoticons.
   * >- If a parameter is specified, the corresponding field is updated. Otherwise, the corresponding field is not overwritten or updated.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ImageId":"ff8fe57e3461416c6a267a4e09****","Title":" title","Description":" description","Tags":" tag1, tag2"}]
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

