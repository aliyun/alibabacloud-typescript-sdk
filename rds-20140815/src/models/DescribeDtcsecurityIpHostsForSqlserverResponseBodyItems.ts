// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups } from "./DescribeDtcsecurityIpHostsForSqlserverResponseBodyItemsWhiteListGroups";


export class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems extends $dara.Model {
  whiteListGroups?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups[];
  static names(): { [key: string]: string } {
    return {
      whiteListGroups: 'WhiteListGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteListGroups: { 'type': 'array', 'itemType': DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups },
    };
  }

  validate() {
    if(Array.isArray(this.whiteListGroups)) {
      $dara.Model.validateArray(this.whiteListGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

