// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocBlocksDeleteRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocBlocksDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mgokkwiovcq5eu02le8
   */
  blockId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Obva6QBXJwxNZoMOC9bE11Zb8n4qY5Pr
   */
  dentryUuid?: string;
  tenantContext?: DocBlocksDeleteRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      dentryUuid: 'DentryUuid',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'string',
      dentryUuid: 'string',
      tenantContext: DocBlocksDeleteRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

