// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the media asset in another service. The URL is associated with the ID of the media asset in IMS. The URL cannot be modified once registered.
   * 
   * Set this parameter to the OSS URL of the media asset. The following formats are supported:
   * 
   * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   * 
   * oss\\://example-bucket/example.mp4: In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 5e778ec0027b71ed80a8909598506***
   */
  mediaId?: string;
  /**
   * @remarks
   * Custom stream tags used to identify transcoding streams.
   * 
   * After the media stream is registered, you can invoke [GetPlayInfo](https://help.aliyun.com/zh/ims/developer-reference/api-ice-2020-11-09-getplayinfo?spm=a2c4g.11186623.help-menu-193643.d_5_0_3_1_4.56dc5a11JzNEVj) to retrieve this tag value.
   * 
   * @example
   * {"key1": "value1"}
   */
  streamTags?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://test.test.com"}, "Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      streamTags: 'StreamTags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURL: 'string',
      mediaId: 'string',
      streamTags: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

