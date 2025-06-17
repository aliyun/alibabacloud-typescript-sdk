// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBlockedRegionsResponseBodyInfoListInfoItem } from "./DescribeBlockedRegionsResponseBodyInfoListInfoItem";


export class DescribeBlockedRegionsResponseBodyInfoList extends $dara.Model {
  infoItem?: DescribeBlockedRegionsResponseBodyInfoListInfoItem[];
  static names(): { [key: string]: string } {
    return {
      infoItem: 'InfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoItem: { 'type': 'array', 'itemType': DescribeBlockedRegionsResponseBodyInfoListInfoItem },
    };
  }

  validate() {
    if(Array.isArray(this.infoItem)) {
      $dara.Model.validateArray(this.infoItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

