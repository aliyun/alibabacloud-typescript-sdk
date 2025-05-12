// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIProductionJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ImageCartoonize
   */
  functionName?: string;
  /**
   * @example
   * oss://example-****.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  input?: string;
  /**
   * @example
   * {"Model":"gif"}
   */
  jobParams?: string;
  /**
   * @example
   * null
   */
  modelId?: string;
  /**
   * @example
   * mns://125340688170****.mns.cn-beijing.aliyuncs.com/queues/example-pipeline
   */
  notifyUrl?: string;
  /**
   * @example
   * oss://example-****.oss-cn-shanghai.aliyuncs.com/iproduction/{source}-{timestamp}-{sequenceId}.srt
   */
  output?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * null
   */
  scheduleParams?: string;
  /**
   * @example
   * null
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      input: 'Input',
      jobParams: 'JobParams',
      modelId: 'ModelId',
      notifyUrl: 'NotifyUrl',
      output: 'Output',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleParams: 'ScheduleParams',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      input: 'string',
      jobParams: 'string',
      modelId: 'string',
      notifyUrl: 'string',
      output: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleParams: 'string',
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

