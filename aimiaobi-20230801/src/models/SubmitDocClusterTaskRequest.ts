// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocClusterTaskRequestDocuments extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文档内容
   */
  content?: string;
  /**
   * @example
   * 文档ID。用于在返回聚类文章时标识文章。如果文章列表中都不传则使用数组索引作为ID。如果部分传则会报错
   */
  docId?: string;
  /**
   * @example
   * 文档标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocClusterTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  documents?: SubmitDocClusterTaskRequestDocuments[];
  /**
   * @example
   * 49
   */
  summaryLength?: number;
  /**
   * @example
   * 69
   */
  titleLength?: number;
  /**
   * @example
   * 15
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      summaryLength: 'SummaryLength',
      titleLength: 'TitleLength',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitDocClusterTaskRequestDocuments },
      summaryLength: 'number',
      titleLength: 'number',
      topicCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

