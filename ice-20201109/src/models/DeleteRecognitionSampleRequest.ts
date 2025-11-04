// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecognitionSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of recognition algorithm. Valid values:
   * 
   * *   landmark
   * *   object
   * *   logo
   * *   face
   * *   label
   * 
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * **************544cb84754************
   */
  entityId?: string;
  /**
   * @remarks
   * The ID of the recognition library.
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
  /**
   * @remarks
   * The ID of the sample that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * **************4d2ba728e2f**************
   */
  sampleId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      entityId: 'EntityId',
      libId: 'LibId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sampleId: 'SampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      entityId: 'string',
      libId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sampleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

