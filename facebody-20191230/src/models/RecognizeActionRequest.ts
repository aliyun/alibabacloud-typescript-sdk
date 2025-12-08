// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeActionRequestURLList extends $dara.Model {
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeAction/1RecognizeAction1.png
   */
  URL?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgQ****
   */
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
      imageData: 'imageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
      imageData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  URLList?: RecognizeActionRequestURLList[];
  /**
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAAoAAAAHJCAIAAACaEB9NAAEAAElEQVR4nNT9Wb****
   */
  videoData?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeAction/RecognizeAction-video1.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      URLList: 'URLList',
      videoData: 'VideoData',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      URLList: { 'type': 'array', 'itemType': RecognizeActionRequestURLList },
      videoData: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.URLList)) {
      $dara.Model.validateArray(this.URLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

