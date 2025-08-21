// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocShrinkRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 231001028593
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  content?: string;
  docMetadataShrink?: string;
  docName?: string;
  /**
   * @example
   * 2023-03-11T23:59:59Z
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  tagIdsShrink?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      docMetadataShrink: 'DocMetadata',
      docName: 'DocName',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIdsShrink: 'TagIds',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docMetadataShrink: 'string',
      docName: 'string',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      startDate: 'string',
      tagIdsShrink: 'string',
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

