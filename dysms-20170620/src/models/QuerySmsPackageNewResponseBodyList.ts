// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsPackageNewResponseBodyListSmsPackageInfo } from "./QuerySmsPackageNewResponseBodyListSmsPackageInfo";


export class QuerySmsPackageNewResponseBodyList extends $dara.Model {
  smsPackageInfo?: QuerySmsPackageNewResponseBodyListSmsPackageInfo[];
  static names(): { [key: string]: string } {
    return {
      smsPackageInfo: 'SmsPackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsPackageInfo: { 'type': 'array', 'itemType': QuerySmsPackageNewResponseBodyListSmsPackageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.smsPackageInfo)) {
      $dara.Model.validateArray(this.smsPackageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

