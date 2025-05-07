// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySoundRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 通话录音url路径，最大长度1000，有效期1小时
   * 
   * @example
   * http://www.oss.com/temepl/a.mp3
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

