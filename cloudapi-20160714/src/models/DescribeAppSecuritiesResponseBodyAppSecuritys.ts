// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity } from "./DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity";


export class DescribeAppSecuritiesResponseBodyAppSecuritys extends $dara.Model {
  appSecurity?: DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity[];
  static names(): { [key: string]: string } {
    return {
      appSecurity: 'AppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecurity: { 'type': 'array', 'itemType': DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity },
    };
  }

  validate() {
    if(Array.isArray(this.appSecurity)) {
      $dara.Model.validateArray(this.appSecurity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

