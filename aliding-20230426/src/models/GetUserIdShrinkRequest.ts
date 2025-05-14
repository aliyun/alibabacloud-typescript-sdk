// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * unionId
   * 
   * @example
   * ****iE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

