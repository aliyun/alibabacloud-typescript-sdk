// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyTemplateRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  custSpaceId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12456
   */
  sceneTemplateCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
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

