// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDingTypeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ANT_DING
   */
  dingType?: string;
  /**
   * @example
   * y
   */
  isDimission?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * antding
   */
  source?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      dingType: 'DingType',
      isDimission: 'IsDimission',
      source: 'Source',
      tenantContextShrink: 'TenantContext',
      workNo: 'WorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingType: 'string',
      isDimission: 'string',
      source: 'string',
      tenantContextShrink: 'string',
      workNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

