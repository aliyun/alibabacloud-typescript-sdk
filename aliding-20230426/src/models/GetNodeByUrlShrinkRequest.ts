// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeByUrlShrinkRequest extends $dara.Model {
  optionShrink?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://alidocs.dingtalk.com/i/nodes/EpGBa2L*********gN7R35y
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      optionShrink: 'Option',
      tenantContextShrink: 'TenantContext',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionShrink: 'string',
      tenantContextShrink: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

