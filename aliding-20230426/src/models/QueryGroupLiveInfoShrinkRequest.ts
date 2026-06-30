// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupLiveInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333d
   */
  anchorUnionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d38xxxxx
   */
  liveUuid?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      anchorUnionId: 'AnchorUnionId',
      liveUuid: 'LiveUuid',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorUnionId: 'string',
      liveUuid: 'string',
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

