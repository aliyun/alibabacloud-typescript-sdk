// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkBlacklistResponseBodyNetworkBlacklistModel extends $dara.Model {
  domainBlacklist?: string[];
  ipBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      domainBlacklist: 'DomainBlacklist',
      ipBlacklist: 'IpBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainBlacklist: { 'type': 'array', 'itemType': 'string' },
      ipBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainBlacklist)) {
      $dara.Model.validateArray(this.domainBlacklist);
    }
    if(Array.isArray(this.ipBlacklist)) {
      $dara.Model.validateArray(this.ipBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkBlacklistResponseBody extends $dara.Model {
  networkBlacklistModel?: GetNetworkBlacklistResponseBodyNetworkBlacklistModel;
  /**
   * @example
   * A578AD3A-8E7C-54FE-A09F-B060941*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkBlacklistModel: 'NetworkBlacklistModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkBlacklistModel: GetNetworkBlacklistResponseBodyNetworkBlacklistModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkBlacklistModel && typeof (this.networkBlacklistModel as any).validate === 'function') {
      (this.networkBlacklistModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

