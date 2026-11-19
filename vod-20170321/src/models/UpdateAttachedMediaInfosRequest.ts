// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttachedMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The update content. You can update the information of up to 20 auxiliary media assets at a time. For the parameter structure, refer to the **UpdateContent** table below.
   * >- The update content for `Title`, `Description`, and `Tags` cannot contain emojis.
   * >- If a parameter is passed, the corresponding field is updated. Otherwise, the field is not overwritten or updated.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"MediaId":"bbc65bba53f6ed90de118a7849****","Title":"Title 1","Description":"Description 1","Tags":"Tag 1,Tag 2"},{"MediaId":"f45cf4eba5cb90233389558c39****","Title2":"Title","Description2":"Description","Tags":"Tag 3,Tag 4"}]
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

