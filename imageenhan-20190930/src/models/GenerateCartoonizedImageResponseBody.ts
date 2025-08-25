// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCartoonizedImageResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/generative-cartoon/2023-02-02/5a3e5760-ff27-4321-8976-d05656fb716a/20230202_154009511910_pclb0gomva.jpg?Expires=1675325422&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=UmAa7HxeumVkDfrdoL02dtztwS****
   */
  resultUrl?: string;
  static names(): { [key: string]: string } {
    return {
      resultUrl: 'ResultUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCartoonizedImageResponseBody extends $dara.Model {
  data?: GenerateCartoonizedImageResponseBodyData;
  message?: string;
  /**
   * @example
   * 48f38719-f0c2-4784-a9cc-30df95e393a9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateCartoonizedImageResponseBodyData,
      message: 'string',
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

