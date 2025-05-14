// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile } from "./GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile";


export class GetDynamicImageJobResponseBodyDynamicImageJobOutput extends $dara.Model {
  /**
   * @remarks
   * The input file. If Type is set to OSS, the URL of an OSS object is returned. If Type is set to Media, the ID of a media asset is returned. The URL of an OSS object can be in one of the following formats:
   * 
   * 1.  OSS://bucket/object
   * 2.  http(s)://bucket.oss-[RegionId].aliyuncs.com/object In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object URL in OSS.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  media?: string;
  /**
   * @remarks
   * The three key elements of OSS.
   */
  ossFile?: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile;
  /**
   * @remarks
   * The type of the input file. Valid values: OSS: an OSS object. Media: a media asset.
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      ossFile: 'OssFile',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      ossFile: GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile,
      type: 'string',
    };
  }

  validate() {
    if(this.ossFile && typeof (this.ossFile as any).validate === 'function') {
      (this.ossFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

