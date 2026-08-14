// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewTopCostTimeResponseBodyUrlList extends $dara.Model {
  costTime?: number;
  domain?: string;
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

export class DescribeDomainViewTopCostTimeResponseBody extends $dara.Model {
  requestId?: string;
  urlList?: DescribeDomainViewTopCostTimeResponseBodyUrlList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urlList: { 'type': 'array', 'itemType': DescribeDomainViewTopCostTimeResponseBodyUrlList },
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

