// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClassicLinkInstancesResponseBodyLinksLink } from "./DescribeClassicLinkInstancesResponseBodyLinksLink";


export class DescribeClassicLinkInstancesResponseBodyLinks extends $dara.Model {
  link?: DescribeClassicLinkInstancesResponseBodyLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeClassicLinkInstancesResponseBodyLinksLink },
    };
  }

  validate() {
    if(Array.isArray(this.link)) {
      $dara.Model.validateArray(this.link);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

