// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendImageStyleResponseBodyData extends $dara.Model {
  /**
   * @example
   * -
   */
  majorUrl?: string;
  /**
   * @example
   * http://luban-vgd-invi.oss-cn-hangzhou.aliyuncs.com/upload/result_/2019-9-26/invi__015694889247201016812_spCq4n.jpg?Expires=1569492524&OSSAccessKeyId=LTAI4Fc5SVvzUQ19K1Cz****&Signature=uOEP8gKvdgPtDcrXxRz1v37dsT****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      majorUrl: 'MajorUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorUrl: 'string',
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

export class ExtendImageStyleResponseBody extends $dara.Model {
  data?: ExtendImageStyleResponseBodyData;
  /**
   * @example
   * F1ABC965-2612-4680-9DE3-B5C77434B9B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExtendImageStyleResponseBodyData,
      requestId: 'string',
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

