// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocShrinkRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  content?: string;
  docMetadataShrink?: string;
  /**
   * @example
   * 2032-05-25T16:28:36Z
   */
  endDate?: string;
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
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * https://example.com/example.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      docMetadataShrink: 'DocMetadata',
      endDate: 'EndDate',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIdsShrink: 'TagIds',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docMetadataShrink: 'string',
      endDate: 'string',
      meta: 'string',
      startDate: 'string',
      tagIdsShrink: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

