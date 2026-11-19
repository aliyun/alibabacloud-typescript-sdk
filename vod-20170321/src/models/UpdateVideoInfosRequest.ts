// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The update content. You can modify object information of up to 20 audio or video files at a time. Separate object information of multiple audio or video files with commas (,). If you attempt to update more than 20 files at a time, the update fails and the `CountExceededMax` error is returned.
   * The value must be a JSON string. For more information about how to construct the parameters, see the **UpdateContent** table below.
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

