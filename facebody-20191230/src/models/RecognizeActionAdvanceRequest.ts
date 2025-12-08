// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizeActionAdvanceRequestURLList extends $dara.Model {
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeAction/1RecognizeAction1.png
   */
  URLObject?: Readable;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgQ****
   */
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
      imageData: 'imageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
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

export class RecognizeActionAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  URLList?: RecognizeActionAdvanceRequestURLList[];
  /**
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAAoAAAAHJCAIAAACaEB9NAAEAAElEQVR4nNT9Wb****
   */
  videoData?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RecognizeAction/RecognizeAction-video1.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      URLList: 'URLList',
      videoData: 'VideoData',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      URLList: { 'type': 'array', 'itemType': RecognizeActionAdvanceRequestURLList },
      videoData: 'string',
      videoUrlObject: 'Readable',
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

