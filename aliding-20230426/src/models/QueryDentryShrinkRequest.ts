// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dentryId?: string;
  includeSpace?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      includeSpace: 'IncludeSpace',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      includeSpace: 'boolean',
      spaceId: 'string',
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

