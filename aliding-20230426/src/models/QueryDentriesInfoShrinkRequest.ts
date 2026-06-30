// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentriesInfoShrinkRequest extends $dara.Model {
  appIdsForAppPropertiesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spaceId?: string;
  tenantContextShrink?: string;
  withThumbnail?: boolean;
  static names(): { [key: string]: string } {
    return {
      appIdsForAppPropertiesShrink: 'AppIdsForAppProperties',
      dentryId: 'DentryId',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
      withThumbnail: 'WithThumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdsForAppPropertiesShrink: 'string',
      dentryId: 'string',
      spaceId: 'string',
      tenantContextShrink: 'string',
      withThumbnail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

