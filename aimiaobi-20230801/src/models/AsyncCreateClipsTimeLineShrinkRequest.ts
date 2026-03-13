// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTimeLineShrinkRequest extends $dara.Model {
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
  highLightConfigShrink?: string;
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
      highLightConfigShrink: 'HighLightConfig',
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
      highLightConfigShrink: 'string',
      noRefVideo: 'boolean',
      processPrompt: 'string',
      recommendAudio: 'boolean',
      taskId: 'string',
      timelineScene: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

