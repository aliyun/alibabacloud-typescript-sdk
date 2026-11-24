// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponseCreatedResponseOutputContent extends $dara.Model {
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

export class ResponseCreatedResponseOutput extends $dara.Model {
  id?: string;
  object?: string;
  type?: string;
  status?: string;
  role?: string;
  content?: ResponseCreatedResponseOutputContent[];
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
      content: { 'type': 'array', 'itemType': ResponseCreatedResponseOutputContent },
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

export class ResponseCreatedResponse extends $dara.Model {
  id?: string;
  object?: string;
  conversationId?: string;
  status?: string;
  modalities?: string[];
  voice?: string;
  outputAudioFormat?: string;
  output?: ResponseCreatedResponseOutput[];
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
      output: { 'type': 'array', 'itemType': ResponseCreatedResponseOutput },
    };
  }

  validate() {
    if(Array.isArray(this.modalities)) {
      $dara.Model.validateArray(this.modalities);
    }
    if(Array.isArray(this.output)) {
      $dara.Model.validateArray(this.output);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseCreated extends $dara.Model {
  type?: string;
  eventId?: string;
  response?: ResponseCreatedResponse;
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
      response: ResponseCreatedResponse,
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

