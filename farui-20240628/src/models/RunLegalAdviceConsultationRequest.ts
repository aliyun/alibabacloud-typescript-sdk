// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLegalAdviceConsultationRequestAssistant } from "./RunLegalAdviceConsultationRequestAssistant";
import { RunLegalAdviceConsultationRequestExtra } from "./RunLegalAdviceConsultationRequestExtra";
import { RunLegalAdviceConsultationRequestThread } from "./RunLegalAdviceConsultationRequestThread";


export class RunLegalAdviceConsultationRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunLegalAdviceConsultationRequestAssistant;
  extra?: RunLegalAdviceConsultationRequestExtra;
  /**
   * @example
   * true
   */
  stream?: boolean;
  thread?: RunLegalAdviceConsultationRequestThread;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      extra: 'extra',
      stream: 'stream',
      thread: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunLegalAdviceConsultationRequestAssistant,
      extra: RunLegalAdviceConsultationRequestExtra,
      stream: 'boolean',
      thread: RunLegalAdviceConsultationRequestThread,
    };
  }

  validate() {
    if(this.assistant && typeof (this.assistant as any).validate === 'function') {
      (this.assistant as any).validate();
    }
    if(this.extra && typeof (this.extra as any).validate === 'function') {
      (this.extra as any).validate();
    }
    if(this.thread && typeof (this.thread as any).validate === 'function') {
      (this.thread as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

