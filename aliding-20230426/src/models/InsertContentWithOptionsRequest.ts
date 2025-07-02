// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertContentWithOptionsRequestTenantContext } from "./InsertContentWithOptionsRequestTenantContext";


export class InsertContentWithOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * content
   */
  content?: { [key: string]: any };
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
   * @example
   * [0,0]
   */
  path?: number[];
  tenantContext?: InsertContentWithOptionsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      documentId: 'DocumentId',
      index: 'Index',
      path: 'Path',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      documentId: 'string',
      index: 'number',
      path: { 'type': 'array', 'itemType': 'number' },
      tenantContext: InsertContentWithOptionsRequestTenantContext,
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
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

