// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The list of job IDs. You can obtain the job ID from the PlayInfo parameter in the response to the [GetPlayInfo](https://help.aliyun.com/document_detail/56124.html) operation.
   * 
   * >  You can specify a maximum of 10 job IDs in a request. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * a718a3a1e8bb42ee3bc88921e94****,aasdcsfg782740asd3****,k2l3ibaskod98wrns9d****
   */
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
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
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

