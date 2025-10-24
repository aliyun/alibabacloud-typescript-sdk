// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPipelineResponseBodyPipelineListPipelineNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The tags.
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

export class SearchPipelineResponseBodyPipelineListPipeline extends $dara.Model {
  creationTime?: string;
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
  notifyConfig?: SearchPipelineResponseBodyPipelineListPipelineNotifyConfig;
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
   * 1
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
      creationTime: 'CreationTime',
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
      creationTime: 'string',
      id: 'string',
      name: 'string',
      notifyConfig: SearchPipelineResponseBodyPipelineListPipelineNotifyConfig,
      quotaAllocate: 'number',
      role: 'string',
      speed: 'string',
      speedLevel: 'number',
      state: 'string',
    };
  }

  validate() {
    if(this.notifyConfig && typeof (this.notifyConfig as any).validate === 'function') {
      (this.notifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPipelineResponseBodyPipelineList extends $dara.Model {
  pipeline?: SearchPipelineResponseBodyPipelineListPipeline[];
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: { 'type': 'array', 'itemType': SearchPipelineResponseBodyPipelineListPipeline },
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

export class SearchPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The MPS queues.
   */
  pipelineList?: SearchPipelineResponseBodyPipelineList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 338CA33A-AE83-5DF4-B6F2-C6D3ED8143F5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineList: SearchPipelineResponseBodyPipelineList,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.pipelineList && typeof (this.pipelineList as any).validate === 'function') {
      (this.pipelineList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

