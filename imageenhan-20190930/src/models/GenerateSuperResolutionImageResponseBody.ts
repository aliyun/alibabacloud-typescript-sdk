// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSuperResolutionImageResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/diffusion-sr/2023-02-07/d01cede5-28bf-4719-96d9-77198d51c2f2/20230207_150650515242_3dbctnjy5f.jpg?Expires=1675755681&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=4FeDXpp0DilXsHdt7qc%2Ffh3zoC****
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

export class GenerateSuperResolutionImageResponseBody extends $dara.Model {
  data?: GenerateSuperResolutionImageResponseBodyData;
  message?: string;
  /**
   * @example
   * 4ad5c3ef-5ac4-4e1c-b14f-90d939aa73eb
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
      data: GenerateSuperResolutionImageResponseBodyData,
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

