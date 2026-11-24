// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponseDoneResponseOutputContent extends $dara.Model {
  type?: string;
  text?: string;
  transcript?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      text: 'text',
      transcript: 'transcript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      text: 'string',
      transcript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseDoneResponseOutput extends $dara.Model {
  id?: string;
  object?: string;
  type?: string;
  status?: string;
  role?: string;
  content?: ResponseDoneResponseOutputContent[];
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      object: 'object',
      type: 'type',
      status: 'status',
      role: 'role',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      object: 'string',
      type: 'string',
      status: 'string',
      role: 'string',
      content: { 'type': 'array', 'itemType': ResponseDoneResponseOutputContent },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseDoneResponseUsageInputTokensDetails extends $dara.Model {
  textTokens?: number;
  audioTokens?: number;
  static names(): { [key: string]: string } {
    return {
      textTokens: 'text_tokens',
      audioTokens: 'audio_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textTokens: 'number',
      audioTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseDoneResponseUsageOutputTokensDetails extends $dara.Model {
  textTokens?: number;
  audioTokens?: number;
  static names(): { [key: string]: string } {
    return {
      textTokens: 'text_tokens',
      audioTokens: 'audio_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textTokens: 'number',
      audioTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseDoneResponseUsage extends $dara.Model {
  totalTokens?: number;
  inputTokens?: number;
  outputTokens?: number;
  inputTokensDetails?: ResponseDoneResponseUsageInputTokensDetails;
  outputTokensDetails?: ResponseDoneResponseUsageOutputTokensDetails;
  static names(): { [key: string]: string } {
    return {
      totalTokens: 'total_tokens',
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      inputTokensDetails: 'input_tokens_details',
      outputTokensDetails: 'output_tokens_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      inputTokensDetails: ResponseDoneResponseUsageInputTokensDetails,
      outputTokensDetails: ResponseDoneResponseUsageOutputTokensDetails,
    };
  }

  validate() {
    if(this.inputTokensDetails && typeof (this.inputTokensDetails as any).validate === 'function') {
      (this.inputTokensDetails as any).validate();
    }
    if(this.outputTokensDetails && typeof (this.outputTokensDetails as any).validate === 'function') {
      (this.outputTokensDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseDoneResponse extends $dara.Model {
  id?: string;
  object?: string;
  conversationId?: string;
  status?: string;
  modalities?: string[];
  voice?: string;
  outputAudioFormat?: string;
  output?: ResponseDoneResponseOutput[];
  usage?: ResponseDoneResponseUsage;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      object: 'object',
      conversationId: 'conversation_id',
      status: 'status',
      modalities: 'modalities',
      voice: 'voice',
      outputAudioFormat: 'output_audio_format',
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      object: 'string',
      conversationId: 'string',
      status: 'string',
      modalities: { 'type': 'array', 'itemType': 'string' },
      voice: 'string',
      outputAudioFormat: 'string',
      output: { 'type': 'array', 'itemType': ResponseDoneResponseOutput },
      usage: ResponseDoneResponseUsage,
    };
  }

  validate() {
    if(Array.isArray(this.modalities)) {
      $dara.Model.validateArray(this.modalities);
    }
    if(Array.isArray(this.output)) {
      $dara.Model.validateArray(this.output);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseDone extends $dara.Model {
  type?: string;
  eventId?: string;
  response?: ResponseDoneResponse;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      response: ResponseDoneResponse,
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

