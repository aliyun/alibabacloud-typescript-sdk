// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttachedMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The update content. You can update the information of up to 20 auxiliary media assets at a time. For the parameter structure, see the **UpdateContent** table below.
   * >- The `Title`, `Description`, and `Tags` fields cannot contain emoticons.
   * >- If a parameter is specified, the corresponding field is updated. Otherwise, the corresponding field is not overwritten or updated.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"MediaId":"bbc65bba53f6ed90de118a7849****","Title":" title1","Description":" description1","Tags":" tag1, tag2"},{"MediaId":"f45cf4eba5cb90233389558c39****","Title2":" title","Description2":" description","Tags":" tag3, tag4"}]
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

