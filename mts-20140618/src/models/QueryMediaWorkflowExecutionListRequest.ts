// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaWorkflowExecutionListRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the media workflow execution instances. To obtain the instance ID, log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Execution Instances** in the left-side navigation pane. Separate multiple IDs with commas (,). You can query a maximum of 10 media workflow execution instances at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 48e33690ac19445488c706924321****
   */
  runIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      runIds: 'RunIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      runIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

