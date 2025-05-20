// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageProcess extends $dara.Model {
  imageThumbnailProcess?: string;
  officeThumbnailProcess?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

