// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocBlocksModifyShrinkRequest extends $dara.Model {
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
  elementShrink?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      dentryUuid: 'DentryUuid',
      elementShrink: 'Element',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'string',
      dentryUuid: 'string',
      elementShrink: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

