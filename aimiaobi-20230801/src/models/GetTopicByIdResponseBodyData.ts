// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicByIdResponseBodyDataStructureSummary } from "./GetTopicByIdResponseBodyDataStructureSummary";


export class GetTopicByIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 异步任务ID（自定义主题场景下使用）
   */
  asyncTaskId?: string;
  /**
   * @example
   * 创建用户ID（自定义主题场景下使用）
   */
  createUser?: string;
  /**
   * @example
   * 43
   */
  hotValue?: number;
  /**
   * @example
   * 热榜ID
   */
  id?: string;
  /**
   * @example
   * PENDING
   */
  status?: string;
  structureSummary?: GetTopicByIdResponseBodyDataStructureSummary[];
  /**
   * @example
   * 热榜摘要
   */
  summary?: string;
  /**
   * @example
   * 异步任务失败错误信息
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 14
   */
  taskStatus?: number;
  /**
   * @example
   * 主题唯一名称
   */
  topic?: string;
  /**
   * @example
   * 热榜源，目前支持的热榜源: Toutiao：头条、Quark：夸克、Baidu：百度、Sina：新浪。Custom：自定义、Aggregation：热点话题榜
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      createUser: 'CreateUser',
      hotValue: 'HotValue',
      id: 'Id',
      status: 'Status',
      structureSummary: 'StructureSummary',
      summary: 'Summary',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      topic: 'Topic',
      topicSource: 'TopicSource',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      createUser: 'string',
      hotValue: 'number',
      id: 'string',
      status: 'string',
      structureSummary: { 'type': 'array', 'itemType': GetTopicByIdResponseBodyDataStructureSummary },
      summary: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      topic: 'string',
      topicSource: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.structureSummary)) {
      $dara.Model.validateArray(this.structureSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

