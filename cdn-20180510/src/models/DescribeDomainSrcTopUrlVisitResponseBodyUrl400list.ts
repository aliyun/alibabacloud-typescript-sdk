// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl400listUrlList";


export class DescribeDomainSrcTopUrlVisitResponseBodyUrl400List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl400ListUrlList },
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

