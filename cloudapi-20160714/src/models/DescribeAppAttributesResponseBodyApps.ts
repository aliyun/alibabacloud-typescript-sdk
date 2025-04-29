// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppAttributesResponseBodyAppsAppAttribute } from "./DescribeAppAttributesResponseBodyAppsAppAttribute";


export class DescribeAppAttributesResponseBodyApps extends $dara.Model {
  appAttribute?: DescribeAppAttributesResponseBodyAppsAppAttribute[];
  static names(): { [key: string]: string } {
    return {
      appAttribute: 'AppAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appAttribute: { 'type': 'array', 'itemType': DescribeAppAttributesResponseBodyAppsAppAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.appAttribute)) {
      $dara.Model.validateArray(this.appAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

