// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecognitionSampleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * **************544cb84754************
   */
  entityId?: string;
  /**
   * @remarks
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

