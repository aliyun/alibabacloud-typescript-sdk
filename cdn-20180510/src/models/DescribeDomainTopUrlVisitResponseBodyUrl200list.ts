// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList } from "./DescribeDomainTopUrlVisitResponseBodyUrl200listUrlList";


export class DescribeDomainTopUrlVisitResponseBodyUrl200List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl200ListUrlList },
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

