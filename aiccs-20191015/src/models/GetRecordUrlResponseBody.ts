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

export class GetRecordUrlResponseBody extends $dara.Model {
  data?: GetRecordUrlResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRecordUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

