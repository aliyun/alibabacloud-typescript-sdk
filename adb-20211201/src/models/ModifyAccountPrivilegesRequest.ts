// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAccountPrivilegesRequestAccountPrivileges } from "./ModifyAccountPrivilegesRequestAccountPrivileges";


export class ModifyAccountPrivilegesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   * 
   * This parameter is required.
   */
  accountPrivileges?: ModifyAccountPrivilegesRequestAccountPrivileges[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivileges: 'AccountPrivileges',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivileges: { 'type': 'array', 'itemType': ModifyAccountPrivilegesRequestAccountPrivileges },
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountPrivileges)) {
      $dara.Model.validateArray(this.accountPrivileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

