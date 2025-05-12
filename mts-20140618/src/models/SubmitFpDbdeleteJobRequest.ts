// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFpDBDeleteJobRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   **Purge**: clears the media fingerprint library. The content in the library is deleted, but the library is not deleted.
   * *   **Delete**: deletes the media fingerprint library. Both the library and its content are deleted.
   * *   Default value: **Purge**.
   * 
   * @example
   * Purge
   */
  delType?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library. You can obtain the library ID from the response parameters of the [CreateFpShotDB](https://help.aliyun.com/document_detail/170149.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue. This ID can be used to associate the job with a notification method. To view the MPS queue ID, log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane.
   * 
   * @example
   * fb712a6890464059b1b2ea7c8647****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The custom data. The value can contain letters and digits and can be up to 128 bytes in length.
   * 
   * @example
   * example data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      delType: 'DelType',
      fpDBId: 'FpDBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delType: 'string',
      fpDBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

