// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentriesInfoShrinkRequest extends $dara.Model {
  appIdsForAppPropertiesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 140901622636
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22443475065
   */
  spaceId?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * false
   */
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

