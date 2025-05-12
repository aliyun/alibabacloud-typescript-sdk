// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the transcoding job to be canceled. You can log on to the **MPS console** and click **Tasks** in the left-side navigation pane to obtain job IDs. Alternatively, you can obtain job IDs from the response of the [SubmitJobs](https://help.aliyun.com/document_detail/29226.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****
   */
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

