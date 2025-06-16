// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup } from "./DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup";


export class DescribeBgpGroupsResponseBodyBgpGroups extends $dara.Model {
  bgpGroup?: DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup[];
  static names(): { [key: string]: string } {
    return {
      bgpGroup: 'BgpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroup: { 'type': 'array', 'itemType': DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.bgpGroup)) {
      $dara.Model.validateArray(this.bgpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

