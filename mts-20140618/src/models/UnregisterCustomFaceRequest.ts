// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnregisterCustomFaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the figure library. The ID is used to uniquely identify a figure library. You can specify the ID of a custom figure library. Make sure that the ID is unique. If you set this parameter to the ID of a system figure library, the system figure library is used. The ID can be up to 120 characters in length and is not case-sensitive. You can call the [ListCustomPersons](https://help.aliyun.com/document_detail/187787.html) operation to query the figure library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * CategoryId001-****
   */
  categoryId?: string;
  /**
   * @remarks
   * The ID of the face. The ID is used to uniquely identify a face. Make sure that the ID is unique. The ID can be up to 120 characters in length and is not case-sensitive. You can call the [ListCustomPersons](https://help.aliyun.com/document_detail/187787.html) operation to query the face ID. If you set this parameter to ALL, all the faces associated with the specified figure are deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 15****
   */
  faceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the figure. The ID is used to uniquely identify a custom figure. Make sure that the ID is unique. The ID can be up to 120 characters in length and is not case-sensitive. You can call the [ListCustomPersons](https://help.aliyun.com/document_detail/187787.html) operation to query the figure ID. If you set this parameter to ALL, all the faces in the specified figure library are deleted, and the custom figure library is deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * PersonId001-****
   */
  personId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      faceId: 'FaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      faceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

