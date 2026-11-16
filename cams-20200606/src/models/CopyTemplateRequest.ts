// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * @example
   * Example value
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * Example value
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template code.
   * 
   * This parameter is required.
   * 
   * @example
   * 12456
   */
  sceneTemplateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  sceneTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      language: 'Language',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneTemplateCode: 'SceneTemplateCode',
      sceneTemplateName: 'SceneTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      language: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneTemplateCode: 'string',
      sceneTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

