// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTenantsRequest extends $dara.Model {
  /**
   * @remarks
   * You can call this operation to delete one or more tenants from an OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DeleteTenants
   * &TenantIds=["ob2mr3oae0****", "ob2mr3oae1****"]
   * &InstanceId=ob317v4uif****
   * &Common request parameters
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * ["ob2mr3oae0****", "ob2mr3oae1****"]
   */
  tenantIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantIds: 'TenantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

