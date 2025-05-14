// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocContentTakIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qnYMoO1rWxrkmoj2I5L2PYkoJ47Z3je9
   */
  dentryUuid?: string;
  generateCp?: boolean;
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
      targetFormat: 'TargetFormat',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      generateCp: 'boolean',
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

