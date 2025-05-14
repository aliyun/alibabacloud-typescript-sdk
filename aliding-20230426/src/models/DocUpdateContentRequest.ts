// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocUpdateContentRequestTenantContext } from "./DocUpdateContentRequestTenantContext";


export class DocUpdateContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @example
   * markdown
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4j6OJzVEG4jJO3p8
   */
  docKey?: string;
  tenantContext?: DocUpdateContentRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataType: 'DataType',
      docKey: 'DocKey',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataType: 'string',
      docKey: 'string',
      tenantContext: DocUpdateContentRequestTenantContext,
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

