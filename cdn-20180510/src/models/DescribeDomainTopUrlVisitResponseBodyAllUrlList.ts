// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList } from "./DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList";


export class DescribeDomainTopUrlVisitResponseBodyAllUrlList extends $dara.Model {
  urlList?: DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainTopUrlVisitResponseBodyAllUrlListUrlList },
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

