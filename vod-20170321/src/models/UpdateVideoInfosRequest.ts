// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The update content. You can modify the information about up to 20 audio and video files at a time. Separate multiple audio and video object information entries with commas (,). If you specify more than 20 objects, the update is failed and the `CountExceededMax` error is returned.
   * The value is a JSON character string. For more details about the parameters, see the **UpdateContent** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VideoId":"f45cf4eba5cb90233389558c39****","Title":"Alibaba Cloud VOD Video Title1"},{"VideoId":"f45cf4eba5c84233389558c36****","Title":"Alibaba Cloud VOD Video Title2"}]
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

