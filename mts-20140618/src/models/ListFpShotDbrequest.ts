// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotDBRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library. You can obtain the library ID from the response parameters of the [CreateFpShotDB](https://help.aliyun.com/document_detail/170149.html) operation. You can query up to 10 libraries at a time. Separate multiple library IDs with commas (,).
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****,ae687c02fe944327ba9631e50da2****
   */
  fpDBIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fpDBIds: 'FpDBIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBIds: 'string',
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

