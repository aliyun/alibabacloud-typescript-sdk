// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups extends $dara.Model {
  securityIpHosts?: string;
  whitelistGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpHosts: 'SecurityIpHosts',
      whitelistGroupName: 'WhitelistGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpHosts: 'string',
      whitelistGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDTCSecurityIpHostsForSQLServerResponseBody extends $dara.Model {
  DBInstanceId?: string;
  ipHostPairNum?: string;
  items?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ipHostPairNum: 'IpHostPairNum',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ipHostPairNum: 'string',
      items: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

