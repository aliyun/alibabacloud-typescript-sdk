// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl300listUrlList";


export class DescribeDomainSrcTopUrlVisitResponseBodyUrl300List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl300ListUrlList },
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

