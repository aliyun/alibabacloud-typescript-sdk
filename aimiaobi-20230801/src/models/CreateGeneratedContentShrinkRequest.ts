// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGeneratedContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * government
   */
  contentDomain?: string;
  contentText?: string;
  keywordsShrink?: string;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * xxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      keywordsShrink: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      keywordsShrink: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

