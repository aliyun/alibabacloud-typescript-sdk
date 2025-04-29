// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp } from "./DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp";


export class DescribeAuthorizedAppsResponseBodyAuthorizedApps extends $dara.Model {
  authorizedApp?: DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp[];
  static names(): { [key: string]: string } {
    return {
      authorizedApp: 'AuthorizedApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApp: { 'type': 'array', 'itemType': DescribeAuthorizedAppsResponseBodyAuthorizedAppsAuthorizedApp },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedApp)) {
      $dara.Model.validateArray(this.authorizedApp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

