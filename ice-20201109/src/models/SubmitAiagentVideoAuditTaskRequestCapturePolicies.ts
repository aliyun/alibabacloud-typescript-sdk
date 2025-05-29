// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskRequestCapturePolicies extends $dara.Model {
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 2
   */
  frameCount?: number;
  prompt?: string;
  /**
   * @example
   * 0
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      frameCount: 'FrameCount',
      prompt: 'Prompt',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      frameCount: 'number',
      prompt: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

