// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJiangSuTelecomDataResponseBodyResult extends $dara.Model {
  /**
   * @example
   * http://jiangsu-telecom.oss-cn-zhangjiakou.aliyuncs.com/jiangsuTelecom/jiangsu_telecom_2024-11-06_data.xls?Expires=1731056700&OSSAccessKeyId=STS.NUqZx6e1HjWYHhYwyDqbRNySp&Signature=wqMK%2Bspo08cg7xDIrzJdgFpZT3U%3D&security-token=CAIS6wJ1q6Ft5B2yfSjIr5bEEcKCiO5p3ZWySk7ok3kRfe1%2Bobz4kjz2IHhMeXJsBuketv42nmxV7%2FoblrN0UIQAT1HPbsZsq84Pq1%2F4O9GY%2FpXrseBZ08VJ18si00SpsvXJasDVEfn%2FGJ70GX2m%2BwZ3xbzlD0bAO3WuLZyOj7N%2Bc90TRXPWRDFaBdBQVGAAwY1gQhm3D%2Fu2NQPwiWf9FVdhvhEG6Vly8qOi2MaRmHG85R%2FYsrZL%2B9uuc8b5P5A0Y8wlAo6PsbYoJvab4kl58ANX8ap6tqtA9Arcs8uVa1sruE3ebrGIrYQ3dFUgPPRnQvIdtrP1nvt5%2FOXS0p%2Fs01NHNOpWXiLTAoe7247OBeiqO8p%2FKeyjZGQuOTooxiRr2elNRQX4VGsiE7JJQhf7CU293KO0YeZxdAR%2FoOMPnzRBdA2yRaA0rjOmtJPBTFOEIL7ymXpDY8bnsxtwDRYu1%2BXrCqUee2Ik3j4vnOf9Je0agAEDuPfR8GLB8uVv4ZCGRRAM5mV3gKCxl07flVk1UPsxMZWBeVwwALT34lxk4x6ivWA7ZXjXdMmIapup%2FEb6UU%2BWhJH1G4sevkw5%2BGb8h8aRjJHBoxB4YLXNTEb5Rk6sVv%2BoCfkljy3%2FWImWGIMigurkAfOIBgUSql8JgFTxQrOHbiAA
   */
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJiangSuTelecomDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 26C9C3D0-160D-5CDE-BF7A-B3C8D14AA949
   */
  requestId?: string;
  result?: GetJiangSuTelecomDataResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetJiangSuTelecomDataResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

