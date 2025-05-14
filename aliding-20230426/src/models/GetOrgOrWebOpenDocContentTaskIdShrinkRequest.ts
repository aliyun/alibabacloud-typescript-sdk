// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgOrWebOpenDocContentTaskIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20eMKjyp810mMdK4Hz4B5BA6JxAZB1Gv
   */
  dentryUuid?: string;
  generateCp?: boolean;
  /**
   * @example
   * 0
   */
  scopeType?: number;
  /**
   * @example
   * markdown
   */
  targetFormat?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      generateCp: 'GenerateCp',
      scopeType: 'ScopeType',
      targetFormat: 'TargetFormat',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      generateCp: 'boolean',
      scopeType: 'number',
      targetFormat: 'string',
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

