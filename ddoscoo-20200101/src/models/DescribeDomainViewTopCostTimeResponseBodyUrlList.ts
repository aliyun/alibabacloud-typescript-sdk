// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewTopCostTimeResponseBodyUrlList extends $dara.Model {
  /**
   * @remarks
   * The response duration. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  costTime?: number;
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
      costTime: 'CostTime',
      domain: 'Domain',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
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

