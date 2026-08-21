// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIImageJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of AI image processing tasks. The value consists of one or more job IDs. A job ID is the value of the JobId parameter returned by the [SubmitAIImageJob](https://help.aliyun.com/document_detail/186922.html) operation.
   * - A maximum of 10 IDs are supported.
   * - Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * cf08a2c6e11e*****de1711b738b9067
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

