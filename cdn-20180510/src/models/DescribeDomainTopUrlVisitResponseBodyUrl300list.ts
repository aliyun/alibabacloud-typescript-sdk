// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList } from "./DescribeDomainTopUrlVisitResponseBodyUrl300listUrlList";


export class DescribeDomainTopUrlVisitResponseBodyUrl300List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl300ListUrlList },
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

