// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Tag Description
   * 
   * @example
   * test description
   */
  tagDescription?: string;
  /**
   * @remarks
   * Tag ID
   * 
   * This parameter is required.
   * 
   * @example
   * 100674
   */
  tagId?: number;
  /**
   * @remarks
   * Tag Name
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagDescription: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

