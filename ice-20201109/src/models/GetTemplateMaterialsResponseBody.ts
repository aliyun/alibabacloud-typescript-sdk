// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateMaterialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URLs of the associated materials.
   * 
   * @example
   * {"music.mp3":"https://bucket.oss-cn-shanghai.aliyuncs.com/music.mp3?sign=xxx","config.json":"https://bucket.oss-cn-shanghai.aliyuncs.com/config.json?sign=xxx","assets/1.jpg":"https://bucket.oss-cn-shanghai.aliyuncs.com/assets/1.jpg?sign=xxx"}
   */
  materialUrls?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      materialUrls: 'MaterialUrls',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialUrls: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

