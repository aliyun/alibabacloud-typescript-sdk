// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageResponseBodyDynamicImageList extends $dara.Model {
  /**
   * @remarks
   * The time when the animated sticker was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-28T02:01:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The duration of the animated sticker. Unit: seconds.
   * 
   * @example
   * 2
   */
  duration?: string;
  /**
   * @remarks
   * The ID of the animated sticker.
   * 
   * @example
   * 2b4e51df60323ef43d6e336ecf****
   */
  dynamicImageId?: string;
  /**
   * @remarks
   * The size of the animated sticker file. Unit: byte.
   * 
   * @example
   * 119866
   */
  fileSize?: string;
  /**
   * @remarks
   * The URL of the animated sticker file.
   * 
   * @example
   * https://example.aliyundoc.com/2e114f110059*****0c3193918fd449a/image/dynamic/2b4e51df60*****323ef43d6e336ecf.webp?auth_key=1597296785-0-0-4a48e85*****bd2bb358e0b3cade
   */
  fileURL?: string;
  /**
   * @remarks
   * The format of the animated sticker. Valid values: gif and webp.
   * 
   * @example
   * webp
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the animated sticker. Unit: frames per second.
   * 
   * @example
   * 10
   */
  fps?: string;
  /**
   * @remarks
   * The height of the animated sticker. Unit: pixel.
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * The job ID for creating the animated sticker.
   * 
   * @example
   * 2bf4390af9e5491c09cc720ad****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 2e114f1100590c3193918fd449a****
   */
  videoId?: string;
  /**
   * @remarks
   * The width of the animated sticker. Unit: pixel.
   * 
   * @example
   * 640
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      duration: 'Duration',
      dynamicImageId: 'DynamicImageId',
      fileSize: 'FileSize',
      fileURL: 'FileURL',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      jobId: 'JobId',
      videoId: 'VideoId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      duration: 'string',
      dynamicImageId: 'string',
      fileSize: 'string',
      fileURL: 'string',
      format: 'string',
      fps: 'string',
      height: 'string',
      jobId: 'string',
      videoId: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of animated stickers.
   */
  dynamicImageList?: ListDynamicImageResponseBodyDynamicImageList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 570189B6-572E-4953-13B4278EE0D8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageList: 'DynamicImageList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageList: { 'type': 'array', 'itemType': ListDynamicImageResponseBodyDynamicImageList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicImageList)) {
      $dara.Model.validateArray(this.dynamicImageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

