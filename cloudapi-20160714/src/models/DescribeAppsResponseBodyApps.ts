// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppsResponseBodyAppsAppItem } from "./DescribeAppsResponseBodyAppsAppItem";


export class DescribeAppsResponseBodyApps extends $dara.Model {
  appItem?: DescribeAppsResponseBodyAppsAppItem[];
  static names(): { [key: string]: string } {
    return {
      appItem: 'AppItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItem: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppsAppItem },
    };
  }

  validate() {
    if(Array.isArray(this.appItem)) {
      $dara.Model.validateArray(this.appItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

