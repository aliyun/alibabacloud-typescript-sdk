// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList } from "./DescribeDomainSrcTopUrlVisitResponseBodyUrl500listUrlList";


export class DescribeDomainSrcTopUrlVisitResponseBodyUrl500List extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyUrl500ListUrlList },
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

