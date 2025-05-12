// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFpShotJobRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the media fingerprint analysis job. The value is a JSON object. For more information, see the "FpShotConfig" section of the [Parameter details](https://help.aliyun.com/document_detail/93568.html) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *       "PrimaryKey": "12345****",
   *       "SaveType": "save",
   *       "FpDBId": "417f2ada5999daf****"
   * }
   */
  fpShotConfig?: string;
  /**
   * @remarks
   * The OSS URL of the job input. The value is a JSON object. You can query the OSS URL in the OSS or MPS console.
   * 
   * > The OSS bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.flv"}
   */
  input?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue. This ID can be used to associate the job with a notification method. To view the ID of the MPS queue, perform the following steps: Log on to the **MPS console**. In the left-side navigation pane, choose **Global Settings** > **Pipelines**.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The custom data. The value can be up to 128 bytes in length and cannot start with a special character.
   * 
   * @example
   * testid-****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotConfig: 'FpShotConfig',
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
      fpShotConfig: 'string',
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

