// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPipelineListResponseBodyNonExistPids extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipelineExtendConfig extends $dara.Model {
  isBoostNew?: boolean;
  maxMultiSpeed?: number;
  multiSpeedDowngradePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      isBoostNew: 'IsBoostNew',
      maxMultiSpeed: 'MaxMultiSpeed',
      multiSpeedDowngradePolicy: 'MultiSpeedDowngradePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBoostNew: 'boolean',
      maxMultiSpeed: 'number',
      multiSpeedDowngradePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * mts-test
   */
  mqTag?: string;
  /**
   * @remarks
   * The queue of messages that are received.
   * 
   * @example
   * example1,example2
   */
  mqTopic?: string;
  /**
   * @remarks
   * The name of the queue that is created in MNS.
   * 
   * @example
   * example-queue-****
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the topic that is created in MNS.
   * 
   * @example
   * example-topic-****
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      mqTag: 'MqTag',
      mqTopic: 'MqTopic',
      queueName: 'QueueName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTag: 'string',
      mqTopic: 'string',
      queueName: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineListPipeline extends $dara.Model {
  extendConfig?: QueryPipelineListResponseBodyPipelineListPipelineExtendConfig;
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****
   */
  id?: string;
  /**
   * @remarks
   * The name of the MPS queue.
   * 
   * @example
   * example-pipeline-****
   */
  name?: string;
  /**
   * @remarks
   * The Message Service (MNS) configuration.
   */
  notifyConfig?: QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig;
  /**
   * @remarks
   * The quota that is allocated to the MPS queue.
   * 
   * @example
   * 10
   */
  quotaAllocate?: number;
  /**
   * @remarks
   * The role that is assigned to the current RAM user.
   * 
   * @example
   * AliyunMTSDefaultRole
   */
  role?: string;
  /**
   * @remarks
   * The type of the MPS queue. Default value: **Standard**. Valid values:
   * 
   * *   **Boost**: MPS queue with transcoding speed boosted
   * *   **Standard**: standard MPS queue
   * *   **NarrowBandHDV2**: MPS queue that supports Narrowband HD 2.0
   * *   **AIVideoCover**: MPS queue for intelligent snapshot capture
   * *   **AIVideoFPShot**: MPS queue for media fingerprinting
   * *   **AIVideoCensor**: MPS queue for automated review
   * *   **AIVideoMCU**: MPS queue for smart tagging
   * *   **AIVideoSummary**: MPS queue for video synopsis
   * *   **AIVideoPorn**: MPS queue for pornography detection in videos
   * *   **AIAudioKWS**: MPS queue for keyword recognition in audio
   * *   **AIAudioASR**: MPS queue for speech-to-text conversion
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The level of the MPS queue.
   * 
   * @example
   * 2
   */
  speedLevel?: number;
  /**
   * @remarks
   * The state of the MPS queue. Valid values:
   * 
   * *   **Active**: The MPS queue is active.
   * *   **Paused**: The MPS queue is paused.
   * 
   * @example
   * Paused
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfig: 'ExtendConfig',
      id: 'Id',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      quotaAllocate: 'QuotaAllocate',
      role: 'Role',
      speed: 'Speed',
      speedLevel: 'SpeedLevel',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfig: QueryPipelineListResponseBodyPipelineListPipelineExtendConfig,
      id: 'string',
      name: 'string',
      notifyConfig: QueryPipelineListResponseBodyPipelineListPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.extendConfig && typeof (this.extendConfig as any).validate === 'function') {
      (this.extendConfig as any).validate();
    }
    if(this.notifyConfig && typeof (this.notifyConfig as any).validate === 'function') {
      (this.notifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBodyPipelineList extends $dara.Model {
  pipeline?: QueryPipelineListResponseBodyPipelineListPipeline[];
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: { 'type': 'array', 'itemType': QueryPipelineListResponseBodyPipelineListPipeline },
    };
  }

  validate() {
    if(Array.isArray(this.pipeline)) {
      $dara.Model.validateArray(this.pipeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPipelineListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of MPS queues that do not exist.
   */
  nonExistPids?: QueryPipelineListResponseBodyNonExistPids;
  /**
   * @remarks
   * The MPS queues.
   */
  pipelineList?: QueryPipelineListResponseBodyPipelineList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C538EAA-ACAF-5AD8-B091-A72C63007149
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistPids: 'NonExistPids',
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistPids: QueryPipelineListResponseBodyNonExistPids,
      pipelineList: QueryPipelineListResponseBodyPipelineList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nonExistPids && typeof (this.nonExistPids as any).validate === 'function') {
      (this.nonExistPids as any).validate();
    }
    if(this.pipelineList && typeof (this.pipelineList as any).validate === 'function') {
      (this.pipelineList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

