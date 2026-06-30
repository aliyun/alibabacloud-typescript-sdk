// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMediaShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  mediaName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      mediaName: 'mediaName',
      mediaType: 'mediaType',
      orgId: 'orgId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      mediaName: 'string',
      mediaType: 'string',
      orgId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

