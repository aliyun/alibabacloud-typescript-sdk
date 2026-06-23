// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MTRSOCRServiceRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  imageRaw?: string;
  mask?: boolean;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageRaw: 'ImageRaw',
      mask: 'Mask',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageRaw: 'string',
      mask: 'boolean',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

