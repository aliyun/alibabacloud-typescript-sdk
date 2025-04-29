// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo } from "./DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo";


export class DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTag extends $dara.Model {
  tagInfo?: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedAppTagTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

