// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

