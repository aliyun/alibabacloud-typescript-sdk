// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdsShrink?: string;
  optionShrink?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nodeIdsShrink: 'NodeIds',
      optionShrink: 'Option',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdsShrink: 'string',
      optionShrink: 'string',
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

