// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceTenantCreatable extends $dara.Model {
  /**
   * @remarks
   * The reason why you cannot create a tenant in the cluster.
   * 
   * @example
   * CPU_NOT_ENOUGH,  MEMORY_NOT_ENOUGH, TENANT_COUNT_EXCEEDS_LIMIT
   */
  disableCreateTenantReason?: string;
  /**
   * @remarks
   * Specifies whether a tenant can be created.
   * 
   * @example
   * true
   */
  enableCreateTenant?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableCreateTenantReason: 'DisableCreateTenantReason',
      enableCreateTenant: 'EnableCreateTenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableCreateTenantReason: 'string',
      enableCreateTenant: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

