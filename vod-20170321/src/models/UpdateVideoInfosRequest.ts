// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The new information about audios or videos. You can modify the information about up to 20 audios or videos at a time. Separate multiple audios or videos with commas (,). When you modify the information exceed 20 audios or videos at a time, the update will fail with an error code **CountExceededMax**.
   * 
   * The value is a JSON string. For more information, see the **UpdateContent** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VideoId":"f45cf4eba5cb90233389558c39****","Title":"test title1"},{"VideoId":"f45cf4eba5c84233389558c36****","Title":"test title2"}]
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

