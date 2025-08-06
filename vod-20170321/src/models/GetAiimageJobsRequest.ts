// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIImageJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image AI processing job. You can obtain the value of JobId from the response to the [SubmitAIImageJob](~~SubmitAIImageJob~~) operation.
   * *   You can specify a maximum of 10 IDs.
   * *   Separate multiple IDs with commas (,).
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

