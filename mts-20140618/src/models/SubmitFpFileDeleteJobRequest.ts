// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFpFileDeleteJobRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media files that you want to delete. Separate multiple file IDs with commas (,). You can delete up to 200 media files at a time. You can obtain media file IDs from the response parameters of the [ListFpShotFiles](https://help.aliyun.com/document_detail/209266.html) operation.
   * 
   * @example
   * 41e6536e4f2250e2e9bf26cdea19****
   */
  fileIds?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library. You can obtain the library ID from the response parameters of the [CreateFpShotDB](https://help.aliyun.com/document_detail/170149.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e432bbf5b665e2a15****
   */
  fpDBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the job is submitted. The MPS queue is bound with a notification method. To view the MPS queue ID, log on to the **MPS console** and choose **Global Settings** > **MPS queue and Callback** in the left-side navigation pane.
   * 
   * @example
   * ed450ea0bfbd41e29f80a401fb4d****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The primary keys of the files to be deleted. Separate multiple primary keys with commas (,). You can delete up to 200 primary keys at a time. You can obtain the primary keys of media files from the response parameters of the [ListFpShotFiles](https://help.aliyun.com/document_detail/209266.html) operation.
   * 
   * >  This parameter is available only in the China (Beijing), China (Hangzhou), and China (Shanghai) regions.
   * 
   * @example
   * 24e0fba7188fae707e146esa54****
   */
  primaryKeys?: string;
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
      fileIds: 'FileIds',
      fpDBId: 'FpDBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      primaryKeys: 'PrimaryKeys',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIds: 'string',
      fpDBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      primaryKeys: 'string',
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

