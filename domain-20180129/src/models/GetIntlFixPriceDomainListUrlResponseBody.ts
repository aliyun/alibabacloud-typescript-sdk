// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntlFixPriceDomainListUrlResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The URL for downloading the list that contains available fixed-price domain names at the international site (alibabacloud.com).
   * 
   * @example
   * http://intl-fixed-price.oss-cn-zhangjiakou.aliyuncs.com/aliyun_intl_fixed_price_domain_20240827.gz?Expires=1724830838&OSSAccessKeyId=LTAI5tPMAybR4gfSEjdf****&Signature=tb0SPs6tKb9gLKyQ5ibpQnBUuT****
   */
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntlFixPriceDomainListUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  module?: GetIntlFixPriceDomainListUrlResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF014B60-C708-4253-B5F2-3F9B493F398B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: GetIntlFixPriceDomainListUrlResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

