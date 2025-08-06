// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDynamicImageRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the animated stickers.
   * 
   * - Separate multiple IDs with commas (,). You can specify a maximum of 10 IDs.
   * - If you do not set this parameter, the system finds the video specified by the VideoId parameter and deletes the information about the animated stickers associated with the video. If more than 10 animated stickers are associated with the video specified by the VideoId parameter, the deletion request is denied.
   * 
   * @example
   * beafec3834a4e52ea52042a4****,8281c8519847fd8970e79e80b6****
   */
  dynamicImageIds?: string;
  /**
   * @remarks
   * The ID of the video associated with the animated stickers whose information you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 2321077d460b028700ef6c2f4d****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageIds: 'DynamicImageIds',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageIds: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

