// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTenantRequest extends $dara.Model {
  /**
   * @remarks
   * Tenant description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * Tenant name.
   * 
   * @example
   * 测试任务202208101424
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

