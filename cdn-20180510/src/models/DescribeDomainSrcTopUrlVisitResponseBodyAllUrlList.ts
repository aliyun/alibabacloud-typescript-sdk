// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList } from "./DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList";


export class DescribeDomainSrcTopUrlVisitResponseBodyAllUrlList extends $dara.Model {
  urlList?: DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDomainSrcTopUrlVisitResponseBodyAllUrlListUrlList },
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

