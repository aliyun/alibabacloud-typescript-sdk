// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocUpdateContentShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataType: 'DataType',
      docKey: 'DocKey',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataType: 'string',
      docKey: 'string',
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

