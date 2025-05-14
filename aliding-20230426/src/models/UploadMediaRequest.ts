// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadMediaRequestTenantContext } from "./UploadMediaRequestTenantContext";


export class UploadMediaRequest extends $dara.Model {
  tenantContext?: UploadMediaRequestTenantContext;
  /**
   * @example
   * test.jpg
   */
  mediaName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://alicdn.com/xxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      mediaName: 'mediaName',
      mediaType: 'mediaType',
      orgId: 'orgId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: UploadMediaRequestTenantContext,
      mediaName: 'string',
      mediaType: 'string',
      orgId: 'number',
      url: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

