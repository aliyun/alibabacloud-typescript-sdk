// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocClusterTaskShrinkRequest extends $dara.Model {
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
  documentsShrink?: string;
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
      documentsShrink: 'Documents',
      summaryLength: 'SummaryLength',
      titleLength: 'TitleLength',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      summaryLength: 'number',
      titleLength: 'number',
      topicCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

