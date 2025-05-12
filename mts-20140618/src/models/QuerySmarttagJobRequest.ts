// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * {"labelResultType":"auto"}
   */
  params?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      params: 'Params',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      params: 'string',
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

