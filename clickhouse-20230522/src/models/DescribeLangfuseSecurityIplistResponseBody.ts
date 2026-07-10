// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseSecurityIPListResponseBodyDataGroupItems extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The group tag.
   * 
   * @example
   * test
   */
  groupTag?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   * 
   * @example
   * 127.0.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The IP address type. The value is fixed to IPv4. IPv6 is not supported.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The network type of the whitelist.
   * 
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      whitelistNetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseSecurityIPListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * lfs-****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * lfs-****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The whitelist group list.
   */
  groupItems?: DescribeLangfuseSecurityIPListResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeLangfuseSecurityIPListResponseBodyDataGroupItems },
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseSecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeLangfuseSecurityIPListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeLangfuseSecurityIPListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

