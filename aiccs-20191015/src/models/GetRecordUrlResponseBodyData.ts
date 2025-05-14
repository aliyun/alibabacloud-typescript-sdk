// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @example
   * http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/10010679716-12-01-56.wav?***
   */
  ossLink?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ossLink: 'OssLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ossLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

