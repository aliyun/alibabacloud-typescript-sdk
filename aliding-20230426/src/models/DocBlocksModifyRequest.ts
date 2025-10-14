// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocBlocksModifyRequestTenantContext extends $dara.Model {
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

export class DocBlocksModifyRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"blockType":"paragraph","paragraph":{"text":"ok"}}
   */
  element?: { [key: string]: any };
  tenantContext?: DocBlocksModifyRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      dentryUuid: 'DentryUuid',
      element: 'Element',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'string',
      dentryUuid: 'string',
      element: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantContext: DocBlocksModifyRequestTenantContext,
    };
  }

  validate() {
    if(this.element) {
      $dara.Model.validateMap(this.element);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

