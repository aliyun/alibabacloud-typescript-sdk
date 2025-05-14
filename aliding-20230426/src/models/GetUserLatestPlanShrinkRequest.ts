// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLatestPlanShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

