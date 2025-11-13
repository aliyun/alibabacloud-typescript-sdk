// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLegalAdviceConsultationRequestAssistant extends $dara.Model {
  /**
   * @example
   * assitant_abc_123
   */
  id?: string;
  metaData?: { [key: string]: string };
  /**
   * @example
   * legal_advice_consult
   */
  type?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestExtra extends $dara.Model {
  deepThink?: boolean;
  onlineSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      deepThink: 'deepThink',
      onlineSearch: 'onlineSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepThink: 'boolean',
      onlineSearch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestThreadMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestThread extends $dara.Model {
  messages?: RunLegalAdviceConsultationRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunLegalAdviceConsultationRequestThreadMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

