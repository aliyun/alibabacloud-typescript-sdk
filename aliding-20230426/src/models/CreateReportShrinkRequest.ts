// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportShrinkRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  toChat?: boolean;
  /**
   * @example
   * []
   */
  toCidsShrink?: string;
  /**
   * @example
   * [123,456]
   */
  toUseridsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contentsShrink: 'Contents',
      ddFrom: 'DdFrom',
      templateId: 'TemplateId',
      tenantContextShrink: 'TenantContext',
      toChat: 'ToChat',
      toCidsShrink: 'ToCids',
      toUseridsShrink: 'ToUserids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentsShrink: 'string',
      ddFrom: 'string',
      templateId: 'string',
      tenantContextShrink: 'string',
      toChat: 'boolean',
      toCidsShrink: 'string',
      toUseridsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

