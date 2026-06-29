// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleTenant extends $dara.Model {
  /**
   * @remarks
   * Tenant description
   * 
   * @example
   * 该租户用来测试
   */
  description?: string;
  /**
   * @remarks
   * Tenant status
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * @example
   * GA***134
   */
  tenantId?: string;
  /**
   * @remarks
   * Tenant name
   * 
   * @example
   * demo
   */
  tenantName?: string;
  /**
   * @remarks
   * Tenant UUID
   * 
   * @example
   * paiworkspace-0001
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      status: 'Status',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      status: 'string',
      tenantId: 'string',
      tenantName: 'string',
      UUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

