// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoCoverResponseBodyDataOutputs extends $dara.Model {
  /**
   * @example
   * 6.1819260887924425
   */
  confidence?: number;
  /**
   * @example
   * http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/video-cover/2020-05-11-07/pic_lOyxGGAqQYSANGxP.mp4_202_544_960_c9f88b2a5f75e17c093d1a65f5edff4d_beautified.png?Expires=1589185385&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=PAalKsfeZC4UQzYDTU%2F3D1G7Xt****
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBodyData extends $dara.Model {
  outputs?: GenerateVideoCoverResponseBodyDataOutputs[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': GenerateVideoCoverResponseBodyDataOutputs },
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVideoCoverResponseBody extends $dara.Model {
  data?: GenerateVideoCoverResponseBodyData;
  message?: string;
  /**
   * @example
   * 5B95B724-C5B9-4F77-A743-0CA4EA95CC82
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
      data: GenerateVideoCoverResponseBodyData,
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

