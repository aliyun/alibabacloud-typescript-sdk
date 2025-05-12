// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the job input. The value must be a JSON object. You must add the Object Storage Service (OSS) bucket that stores the OSS object to be used as the job input as a media bucket in the MPS console. To add an OSS bucket as a media bucket, you can log on to the MPS console, choose Workflows > Media Buckets in the left-side navigation pane, and then click Add Bucket. After the OSS bucket is added as a media bucket, you must perform URL encoding for the OSS object. Example: `{"Bucket":"example-bucket","Location":"example-location","Object":"example%2Ftest.flv"}`. This example indicates the `"example-bucket.example-location.aliyuncs.com/example/test.flv"` object.
   * 
   * > The OSS bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"example-location","Object":"example%2Ftest.flv"}
   */
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which you want to submit the snapshot job. To obtain the ID, you can log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane.
   * 
   * > Make sure that an available Message Service (MNS) topic is bound to the specified MPS queue. Otherwise, the relevant messages may fail to be sent as expected.
   * 
   * @example
   * dd3dae411e704030b921e52698e5****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot configurations. For more information, see the "AliyunSnapshotConfig" section of the [Data types](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * > If you set the Interval parameter that is nested under SnapshotConfig, snapshots are captured at the specified intervals. The default value of the Interval parameter is 10, in seconds. If an input video is short but you specify large values for both the Num and Interval parameters, the actual number of snapshots captured may be smaller than the specified number. For example, if you set the Num parameter to 5 and the Interval parameter to 3 for a video of 10 seconds, the number of snapshots captured cannot reach 5.
   * 
   * This parameter is required.
   * 
   * @example
   * {"OutputFile":{"Bucket":"example-001","Location":"example-location","Object":"{Count}.jpg"},"Time":"5","Num":"10","Interval":"20"}
   */
  snapshotConfig?: string;
  /**
   * @remarks
   * The custom data. The custom data can contain letters, digits, and hyphens (-) and be up to 1,024 bytes in size. The custom data cannot start with a special character.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotConfig: 'SnapshotConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotConfig: 'string',
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

