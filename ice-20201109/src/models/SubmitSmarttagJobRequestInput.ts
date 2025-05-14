// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * If Type is set to OSS, specify an OSS path. Example: OSS://test-bucket/video/202208/test.mp4.
   * 
   * If Type is set to Media, specify a media asset ID. Example: c5c62d8f0361337cab312dce8e77dc6d.
   * 
   * If Type is set to URL, specify an HTTP URL. Example: https://zc-test.oss-cn-shanghai.aliyuncs.com/test/unknowFace.mp4.
   * 
   * @example
   * c5c62d8f0361337cab312dce8e77dc6d
   */
  media?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * *   OSS
   * *   Media
   * *   URL
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

