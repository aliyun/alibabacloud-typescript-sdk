// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl200listUrlList";


export class DescribeDomainSrcTopUrlVisitResponseBodyUrl200List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl200ListUrlList },
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

