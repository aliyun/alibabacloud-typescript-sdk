// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleUser } from "./SimpleUser";


export class SimpleTenant extends $dara.Model {
  /**
   * @remarks
   * Creator
   */
  creator?: SimpleUser;
  /**
   * @remarks
   * Description
   * 
   * @example
   * 这是一个测试租户
   */
  description?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2021-07-07 16:09:20
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2021-07-07 16:09:20
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Updated By Information
   */
  modifier?: SimpleUser;
  /**
   * @remarks
   * Role Information
   * 
   * @example
   * ADMIN
   */
  role?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * @example
   * GA***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * Tenant Name
   * 
   * @example
   * demo
   */
  tenantName?: string;
  /**
   * @remarks
   * Unique Identifier
   * 
   * @example
   * paiworkspace-0001
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifier: 'Modifier',
      role: 'Role',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: SimpleUser,
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifier: SimpleUser,
      role: 'string',
      tenantId: 'string',
      tenantName: 'string',
      UUID: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

