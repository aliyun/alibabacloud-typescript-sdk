// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The recognition type. Valid values:
   * 
   * - landmark: custom landmark
   * 
   * - object: custom object
   * 
   * - logo: custom logo
   * 
   * - face: custom face
   * 
   * - label: custom label
   * 
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * The additional information about the custom recognition entity. The value is a JSON string and can be up to 256 bytes in length.
   * 
   * @example
   * {"description": "book classification"}
   */
  entityInfo?: string;
  /**
   * @remarks
   * The name of the custom recognition entity. The name can be up to 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * RecognitionEntity name
   */
  entityName?: string;
  /**
   * @remarks
   * The ID of the recognition library. You can call the [ListRecognitionLibs](https://help.aliyun.com/document_detail/2926699.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * *************24b47865c6**************
   */
  libId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      entityInfo: 'EntityInfo',
      entityName: 'EntityName',
      libId: 'LibId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      entityInfo: 'string',
      entityName: 'string',
      libId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

