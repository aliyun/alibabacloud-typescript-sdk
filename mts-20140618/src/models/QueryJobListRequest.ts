// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of transcoding jobs. Separate multiple IDs with commas (,). You can query a maximum of 10 transcoding jobs at a time. You can log on to the [ApsaraVideo Media Processing (MPS) console](https://mps.console.aliyun.com/overview) and click **Tasks** in the left-side navigation pane to obtain job IDs. Alternatively, you can obtain job IDs from the response to the [SubmitJobs](https://help.aliyun.com/document_detail/29226.html) operation.
   * 
   * >  If you do not set the JobIds parameter, the `InvalidParameter` error code is returned.
   * 
   * @example
   * bb558c1cc25b45309aab5be44d19****,d1ce4d3efcb549419193f50f1fcd****
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

