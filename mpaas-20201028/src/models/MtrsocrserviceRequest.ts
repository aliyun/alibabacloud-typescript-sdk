// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MTRSOCRServiceRequest extends $dara.Model {
  /**
   * @example
   * ONEX8C7E7FA161089
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xydasf==ac
   */
  imageRaw?: string;
  mask?: boolean;
  /**
   * @example
   * tabcaa
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID_CARD_OCR
   */
  type?: string;
  /**
   * @example
   * default
   */
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

