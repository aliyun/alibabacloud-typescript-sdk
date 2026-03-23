// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  DBInstanceIPArrayAttribute?: string;
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  freshWhiteListReadins?: string;
  modifyMode?: string;
  resourceOwnerId?: number;
  securityIPType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  securityIps?: string;
  whitelistNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceId: 'DBInstanceId',
      freshWhiteListReadins: 'FreshWhiteListReadins',
      modifyMode: 'ModifyMode',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPType: 'SecurityIPType',
      securityIps: 'SecurityIps',
      whitelistNetworkType: 'WhitelistNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceId: 'string',
      freshWhiteListReadins: 'string',
      modifyMode: 'string',
      resourceOwnerId: 'number',
      securityIPType: 'string',
      securityIps: 'string',
      whitelistNetworkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

