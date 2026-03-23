// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ipWhitelist?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'IpWhitelist',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

