// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageResponseBodyDynamicImageList extends $dara.Model {
  /**
   * @remarks
   * The time when the animated image was created. The time follows the format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2020-07-28T02:01:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The duration of the animated image. Unit: seconds.
   * 
   * @example
   * 2
   */
  duration?: string;
  /**
   * @remarks
   * The animated image ID.
   * 
   * @example
   * 2b4e51df60323ef43d6e336ecf****
   */
  dynamicImageId?: string;
  /**
   * @remarks
   * The size of the animated image file. Unit: bytes.
   * 
   * @example
   * 119866
   */
  fileSize?: string;
  /**
   * @remarks
   * The URL of the animated image file.
   * 
   * @example
   * https://example.aliyundoc.com/2e114f110059*****0c3193918fd449a/image/dynamic/2b4e51df60*****323ef43d6e336ecf.webp?auth_key=1597296785-0-0-4a48e85*****bd2bb358e0b3cade
   */
  fileURL?: string;
  /**
   * @remarks
   * The format of the animated image. Valid values:
   * - **gif**
   * - **webp**
   * 
   * @example
   * webp
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the animated image. Unit: frames per second.
   * 
   * @example
   * 10
   */
  fps?: string;
  /**
   * @remarks
   * The height of the animated image. Unit: px.
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * The animated image job ID.
   * 
   * @example
   * 2bf4390af9e5491c09cc720ad****
   */
  jobId?: string;
  /**
   * @remarks
   * The video ID.
   * 
   * @example
   * 2e114f1100590c3193918fd449a****
   */
  videoId?: string;
  /**
   * @remarks
   * The width of the animated image. Unit: px.
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
   * The animated image results.
   */
  dynamicImageList?: ListDynamicImageResponseBodyDynamicImageList[];
  /**
   * @remarks
   * The request ID.
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

