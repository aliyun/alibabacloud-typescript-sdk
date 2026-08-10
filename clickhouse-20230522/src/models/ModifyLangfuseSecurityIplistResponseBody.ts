// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLangfuseSecurityIPListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 12345
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * @example
   * lfs-*****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * test
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
   * The IP whitelist.
   * 
   * @example
   * 192.168.0.0/24,172.16.0.0/24
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
   * The task ID.
   * 
   * @example
   * 100001080
   */
  taskId?: number;
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
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      taskId: 'TaskId',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      taskId: 'number',
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

export class ModifyLangfuseSecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ModifyLangfuseSecurityIPListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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
      data: ModifyLangfuseSecurityIPListResponseBodyData,
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

