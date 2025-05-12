// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the input file. For more information, see the "Input" section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * > 
   * 
   * *   The path of an Object Storage Service (OSS) object must be URL-encoded in UTF-8 before you use the path in MPS.
   * 
   * *   The OSS bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * a/b/c/test-cn.srt
   */
  input?: string;
  /**
   * @remarks
   * The name of the OSS bucket that stores the output file.
   * 
   * *   For more information about the term bucket, see [Terms](https://help.aliyun.com/document_detail/31827.html).
   * 
   * This parameter is required.
   * 
   * @example
   * exampleBucket
   */
  outputBucket?: string;
  /**
   * @remarks
   * The region in which the OSS bucket that stores the output file resides.
   * 
   * *   The OSS bucket must reside in the same region as MPS.
   * *   For more information about the term bucket, see [Terms](https://help.aliyun.com/document_detail/31827.html).
   * 
   * @example
   * oss-cn-hangzhou
   */
  outputLocation?: string;
  /**
   * @remarks
   * The job output configurations. For more information, see the "Output" section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * *   Specify the value in a JSON array of Output objects. You can specify up to 30 Output objects.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"OutputObject":"exampleOutput.mp4","TemplateId":"6181666213ab41b9bc21da8ff5ff****","WaterMarks":[{"InputFile":{"Bucket":"exampleBucket","Location":"oss-cn-hangzhou","Object":"image_01.png"},"WaterMarkTemplateId":"9b772ce2740d4d55876d8b542d47****"}],"UserData":"testid-001"}]
   */
  outputs?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue. For more information, see [Terms](https://help.aliyun.com/document_detail/31827.html).
   * 
   * *   To obtain the ID of an MPS queue, you can log on to the [MPS console](https://mps.console.aliyun.com/overview) and choose **Global Settings** > **MPS Queue and Callback** in the left-side navigation pane.
   * *   If you want to receive asynchronous message notifications, associate an MNS queue or topic with the MPS queue. For more information, see [Receive notifications](https://help.aliyun.com/document_detail/42618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dd3dae411e704030b921e52698e5****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      outputBucket: 'OutputBucket',
      outputLocation: 'OutputLocation',
      outputs: 'Outputs',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      outputBucket: 'string',
      outputLocation: 'string',
      outputs: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
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

