// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the asynchronous mode for the job. We recommend that you set this parameter to true. Valid values:
   * 
   * *   **true**: enables the asynchronous mode.
   * *   **false**: does not enable the asynchronous mode.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The information about the input media file. The value is a JSON string. You must perform the following operations to add the OSS bucket in which the input media file is stored as a media bucket: Log on to the **MPS console**, choose **Workflows** > **Media Buckets** in the left-side navigation pane, and then click **Add Bucket**. After you add the OSS bucket as a media bucket, you must perform URL encoding for the OSS object. For example, `{"Bucket":"example-bucket","Location":"example-location","Object":"example%2Fexample.flv"}` indicates the `example-bucket.example-location.aliyuncs.com/example/example.flv` file.
   * 
   * > The OSS bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"example-location","Object":"example%2Fexample.flv"}
   */
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted. For more information, see [Terms](https://help.aliyun.com/document_detail/29197.html).
   * 
   * *   To view the ID of the MPS queue, log on to the [MPS console](https://mps.console.aliyun.com/overview) and choose **Global Settings** > **MPS queue and Callback** in the left-side navigation pane. On the MPS queue and Callback page, you can view the ID of an MPS queue or create an MPS queue.
   * *   If you want to receive asynchronous message notifications, associate an MNS queue or topic with the MPS queue. For more information, see [Receive message notifications](https://www.alibabacloud.com/help/en/mps/receive-message-notifications/?spm=a2c63.p38356.0.0.b48576d2jxNSca).
   * 
   * @example
   * 88c6ca184c0e432bbf5b665e2a15****
   */
  pipelineId?: string;
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
      async: 'Async',
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
      async: 'boolean',
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

