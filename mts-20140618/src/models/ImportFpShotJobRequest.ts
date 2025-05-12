// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportFpShotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the text fingerprint library to which the text file is imported. You can specify only one job of importing text files to a text fingerprint library at a time. You can obtain the library ID from the response parameters of the [CreateFpShotDB](https://help.aliyun.com/document_detail/170149.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The job configurations. The value must be a JSON object. Example: `{"SaveType":"onlysave"}`. The `SaveType` field indicates the storage type. Valid values of the SaveType field:
   * 
   * *   **save**: The fingerprints of the text file are saved to the text fingerprint library only if the text file is not duplicated with content in the text fingerprint library.
   * *   **onlysave**: The fingerprints of the text file are saved to the text fingerprint library.
   * 
   * This parameter is required.
   * 
   * @example
   * {"SaveType":"onlysave"}
   */
  fpImportConfig?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the text file to be imported to the text fingerprint library. The value must be a JSON object. Example: {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.flv"}.
   * 
   * > The OSS bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * {“Bucket”:”example-bucket”,“Location”:”oss-cn-shanghai”,“Object”:”example.txt”}
   */
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue. To view the ID of the MPS queue, perform the following steps: Log on to the **MPS console**. In the left-side navigation pane, choose **Global Settings** > **Pipelines**. The MPS queue is associated with a specified Message Service (MNS) topic. You can submit jobs for different services to different MPS queues. If you do not specify this parameter, the job is submitted to the default MPS queue and no MNS topic is associated with the MPS queue.
   * 
   * @example
   * ae687c02fe944327ba9631e50da2****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The user-defined data. The value can contain letters, digits, and special characters. The value can be up to 128 bytes in length.
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      fpImportConfig: 'FpImportConfig',
      input: 'Input',
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
      fpDBId: 'string',
      fpImportConfig: 'string',
      input: 'string',
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

