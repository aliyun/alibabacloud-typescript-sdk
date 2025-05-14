// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  contentsShrink?: string;
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contentsShrink: 'Contents',
      ddFrom: 'DdFrom',
      templateId: 'TemplateId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentsShrink: 'string',
      ddFrom: 'string',
      templateId: 'string',
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

