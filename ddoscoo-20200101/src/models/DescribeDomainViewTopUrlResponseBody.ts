// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewTopUrlResponseBodyUrlList extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 3390671
   */
  count?: number;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The URL that is Base64-encoded.
   * 
   * @example
   * Lw==
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domain: 'Domain',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domain: 'string',
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

export class DescribeDomainViewTopUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the URLs that receive the most requests.
   */
  urlList?: DescribeDomainViewTopUrlResponseBodyUrlList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urlList: { 'type': 'array', 'itemType': DescribeDomainViewTopUrlResponseBodyUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.urlList)) {
      $dara.Model.validateArray(this.urlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

