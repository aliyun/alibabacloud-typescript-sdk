// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttachedMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The new information about the one or more images. You can modify the information about up to 20 auxiliary media assets at a time. For more information, see the **UpdateContent** section of this topic.
   * 
   * > *   You cannot specify emojis for `Title`, `Description`, or `Tags`.
   * > *   The specific parameter of a video is updated only when a new value is passed in the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"MediaId ":"bbc65bba53f6ed90de118a7849****","Title":" test title1","Description":"test description1","Tags":"tag1,tag2"},{"MediaId ":"f45cf4eba5cb90233389558c39****","Title2":"test title2","Description2":"test description2","Tags":"tag3,tag4"}]
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

