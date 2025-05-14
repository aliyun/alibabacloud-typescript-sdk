// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipartFileUploadInfosShrinkRequest extends $dara.Model {
  optionShrink?: string;
  partNumbersShrink?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * hwHPAAAAAipHxxxxx
   */
  uploadKey?: string;
  static names(): { [key: string]: string } {
    return {
      optionShrink: 'Option',
      partNumbersShrink: 'PartNumbers',
      tenantContextShrink: 'TenantContext',
      uploadKey: 'UploadKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionShrink: 'string',
      partNumbersShrink: 'string',
      tenantContextShrink: 'string',
      uploadKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

