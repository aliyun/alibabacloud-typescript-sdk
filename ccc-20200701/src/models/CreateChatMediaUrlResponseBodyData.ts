// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatMediaUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * $iAHNCNQCo21wMwMGBAAFAAbaACOEAaQhIH6TAqogDGyb-qD2Hbj0A88AAAGRLKYVnwTOACwwYwcACM8AAAGRLRPynQ
   */
  mediaId?: string;
  /**
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-test/namelist.csv?Expires=1642067227&OSSAccessKeyId=****&Signature=****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

