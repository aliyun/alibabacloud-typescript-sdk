// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  dentryId?: string;
  /**
   * @example
   * true
   */
  includeSpace?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * space-fxhb96vuddz8htqt
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

