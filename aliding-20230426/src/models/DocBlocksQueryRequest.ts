// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocBlocksQueryRequestTenantContext extends $dara.Model {
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

export class DocBlocksQueryRequest extends $dara.Model {
  /**
   * @example
   * heading
   */
  blockType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  docKey?: string;
  /**
   * @example
   * 1
   */
  endIndex?: number;
  /**
   * @example
   * 0
   */
  startIndex?: number;
  tenantContext?: DocBlocksQueryRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      docKey: 'DocKey',
      endIndex: 'EndIndex',
      startIndex: 'StartIndex',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'string',
      docKey: 'string',
      endIndex: 'number',
      startIndex: 'number',
      tenantContext: DocBlocksQueryRequestTenantContext,
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

