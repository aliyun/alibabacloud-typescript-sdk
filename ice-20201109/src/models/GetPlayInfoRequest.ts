// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoRequest extends $dara.Model {
  authTimeout?: number;
  /**
   * @remarks
   * The InputURL specified when the media asset was registered. For more information, see [RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html).
   * > 
   * > At least one of MediaId and InputURL must be specified.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4  or  vod://****20b48fb04483915d4f2cd8ac****
   */
  inputURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * > 
   * > At least one of MediaId and InputURL must be specified.
   * 
   * @example
   * 86434e152b7d4f20be480574439fe***
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      inputURL: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

