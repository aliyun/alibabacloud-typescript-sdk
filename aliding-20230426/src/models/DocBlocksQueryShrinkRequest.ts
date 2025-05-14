// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocBlocksQueryShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      blockType: 'BlockType',
      docKey: 'DocKey',
      endIndex: 'EndIndex',
      startIndex: 'StartIndex',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockType: 'string',
      docKey: 'string',
      endIndex: 'number',
      startIndex: 'number',
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

