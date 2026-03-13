// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTimeLineRequestHighLightConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  htAnalyzeRhythm?: boolean;
  /**
   * @example
   * [
   *         "高清演员近景特写镜头【高优】",
   *         "演出高潮-沉浸表演【高优】",
   *         "演出高潮-近景表情【高优】"
   * ]
   */
  htHighQualityLabel?: string[];
  /**
   * @example
   * [
   *         "画面昏暗",
   *         "采访画面",
   *         "字幕画面"
   * ]
   */
  htLowQualityLabel?: string[];
  /**
   * @example
   * 20
   */
  htMaxTimeLength?: number;
  /**
   * @example
   * 10
   */
  htMinTimeLength?: number;
  /**
   * @example
   * 请从输入的音乐演出视频中，自动识别并提取出「最具视觉冲击力、情感爆发力或独特吸引力」...
   */
  htPrompt?: string;
  /**
   * @example
   * 1.5
   */
  htSingleShotLen?: number;
  static names(): { [key: string]: string } {
    return {
      htAnalyzeRhythm: 'HtAnalyzeRhythm',
      htHighQualityLabel: 'HtHighQualityLabel',
      htLowQualityLabel: 'HtLowQualityLabel',
      htMaxTimeLength: 'HtMaxTimeLength',
      htMinTimeLength: 'HtMinTimeLength',
      htPrompt: 'HtPrompt',
      htSingleShotLen: 'HtSingleShotLen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      htAnalyzeRhythm: 'boolean',
      htHighQualityLabel: { 'type': 'array', 'itemType': 'string' },
      htLowQualityLabel: { 'type': 'array', 'itemType': 'string' },
      htMaxTimeLength: 'number',
      htMinTimeLength: 'number',
      htPrompt: 'string',
      htSingleShotLen: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.htHighQualityLabel)) {
      $dara.Model.validateArray(this.htHighQualityLabel);
    }
    if(Array.isArray(this.htLowQualityLabel)) {
      $dara.Model.validateArray(this.htLowQualityLabel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncCreateClipsTimeLineRequest extends $dara.Model {
  /**
   * @example
   * 素材附加信息
   */
  additionalContent?: string;
  /**
   * @example
   * 自定义口播内容
   */
  customContent?: string;
  highLightConfig?: AsyncCreateClipsTimeLineRequestHighLightConfig;
  /**
   * @example
   * 默认开启
   */
  noRefVideo?: boolean;
  /**
   * @example
   * 口播内容是乌镇旅游宣传广告，口播内容时长约为1分钟，开头要描述乌镇是千年文化传承的江南水乡，之后要体现乌镇的传统手工艺、美食和美景，最后要号召大家来乌镇旅游
   */
  processPrompt?: string;
  /**
   * @example
   * false
   */
  recommendAudio?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @example
   * null - 通用口播
   *  0-通用口播
   *  1- 高光
   */
  timelineScene?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContent: 'AdditionalContent',
      customContent: 'CustomContent',
      highLightConfig: 'HighLightConfig',
      noRefVideo: 'NoRefVideo',
      processPrompt: 'ProcessPrompt',
      recommendAudio: 'RecommendAudio',
      taskId: 'TaskId',
      timelineScene: 'TimelineScene',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContent: 'string',
      customContent: 'string',
      highLightConfig: AsyncCreateClipsTimeLineRequestHighLightConfig,
      noRefVideo: 'boolean',
      processPrompt: 'string',
      recommendAudio: 'boolean',
      taskId: 'string',
      timelineScene: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.highLightConfig && typeof (this.highLightConfig as any).validate === 'function') {
      (this.highLightConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

