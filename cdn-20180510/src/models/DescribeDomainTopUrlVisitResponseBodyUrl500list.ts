// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList } from "./DescribeDomainTopUrlVisitResponseBodyUrl500listUrlList";


export class DescribeDomainTopUrlVisitResponseBodyUrl500List extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyUrl500ListUrlList },
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

