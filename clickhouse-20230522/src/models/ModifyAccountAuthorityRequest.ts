// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAccountAuthorityRequestDmlAuthSetting } from "./ModifyAccountAuthorityRequestDmlAuthSetting";


export class ModifyAccountAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The information about permissions.
   * 
   * This parameter is required.
   */
  dmlAuthSetting?: ModifyAccountAuthorityRequestDmlAuthSetting;
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
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      dmlAuthSetting: 'DmlAuthSetting',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      dmlAuthSetting: ModifyAccountAuthorityRequestDmlAuthSetting,
      regionId: 'string',
    };
  }

  validate() {
    if(this.dmlAuthSetting && typeof (this.dmlAuthSetting as any).validate === 'function') {
      (this.dmlAuthSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

