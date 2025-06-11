// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseUserRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * sms_pre
   */
  databaseName?: string;
  /**
   * @remarks
   * The account information.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of usernames and their respective roles.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"UserName":"omstest","Role":"readwrite"}]
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      tenantId: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

