// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAnalysisJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job configurations. Set this parameter as required. For more information, see the "AnalysisConfig" section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * @example
   * {"QualityControl":{"RateQuality":25,"MethodStreaming":"network"}}
   */
  analysisConfig?: string;
  /**
   * @remarks
   * The input information about the preset template analysis job to be submitted. The value must be a JSON object. You must log on to the Object Storage Service (OSS) console to grant the read permissions on the specified OSS bucket to MPS. For more information, see the "Input" section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * > The OSS bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-hangzhou","Object":"example.flv"}
   */
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which the job is submitted. To view the ID of the MPS queue, log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane. If you want to enable asynchronous notifications, make sure that the MPS queue is bound to a Message Service (MNS) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * bb558c1cc25b45309aab5be44d19****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job is submitted.
   * 
   * *   Valid values: **1 to 10**. A value of 10 indicates the highest priority.
   * *   Default value: **6**.
   * 
   * @example
   * 10
   */
  priority?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The custom data. The custom data can contain letters, digits, and hyphens (-), and can be up to 1,024 bytes in length. The custom data cannot start with a special character.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisConfig: 'AnalysisConfig',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisConfig: 'string',
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      priority: 'string',
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

