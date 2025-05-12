// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the whitelist.
   * 
   * @example
   * grouptag
   */
  groupTag?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 195F64C2-8F11-532B-A436-FC08A221D756
   */
  requestId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.XX.XX,127.2.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The IP address type.
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
   * 479095561
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
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      requestId: 'RequestId',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      taskId: 'TaskId',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupName: 'string',
      groupTag: 'string',
      requestId: 'string',
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

