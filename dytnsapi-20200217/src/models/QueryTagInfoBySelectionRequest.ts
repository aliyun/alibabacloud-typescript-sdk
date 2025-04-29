// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagInfoBySelectionRequest extends $dara.Model {
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 58
   */
  industryId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 83
   */
  sceneId?: number;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 71
   */
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      industryId: 'IndustryId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneId: 'SceneId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industryId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneId: 'number',
      tagId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

