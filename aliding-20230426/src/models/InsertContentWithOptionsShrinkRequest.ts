// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertContentWithOptionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * content
   */
  contentShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * documentId
   */
  documentId?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * union_id
   */
  operatorId?: string;
  /**
   * @example
   * [0,0]
   */
  pathShrink?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      documentId: 'DocumentId',
      index: 'Index',
      operatorId: 'OperatorId',
      pathShrink: 'Path',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      documentId: 'string',
      index: 'number',
      operatorId: 'string',
      pathShrink: 'string',
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

