// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotImportJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job IDs. You can obtain the job IDs from the response to the [ImportFpShotJob](https://help.aliyun.com/document_detail/312262.html) operation. You can specify a maximum of 10 job IDs in a request. Separate multiple job IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****,c074b118ace44395a02063a5ab94****
   */
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
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

