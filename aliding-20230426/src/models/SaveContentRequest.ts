// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SaveContentRequestContents } from "./SaveContentRequestContents";
import { SaveContentRequestTenantContext } from "./SaveContentRequestTenantContext";


export class SaveContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  contents?: SaveContentRequestContents[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client
   */
  ddFrom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdfafdsfsafdfsaf
   */
  templateId?: string;
  tenantContext?: SaveContentRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      ddFrom: 'DdFrom',
      templateId: 'TemplateId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': SaveContentRequestContents },
      ddFrom: 'string',
      templateId: 'string',
      tenantContext: SaveContentRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
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

