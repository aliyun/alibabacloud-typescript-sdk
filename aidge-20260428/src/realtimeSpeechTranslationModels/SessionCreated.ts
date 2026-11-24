// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionCreatedSessionTurnDetection extends $dara.Model {
  type?: string;
  threshold?: number;
  silenceDurationMs?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      threshold: 'threshold',
      silenceDurationMs: 'silence_duration_ms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      threshold: 'number',
      silenceDurationMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionCreatedSessionTranslationCorpus extends $dara.Model {
  phrases?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      phrases: 'phrases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrases: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.phrases) {
      $dara.Model.validateMap(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionCreatedSessionTranslation extends $dara.Model {
  language?: string;
  corpus?: SessionCreatedSessionTranslationCorpus;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      corpus: 'corpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      corpus: SessionCreatedSessionTranslationCorpus,
    };
  }

  validate() {
    if(this.corpus && typeof (this.corpus as any).validate === 'function') {
      (this.corpus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionCreatedSession extends $dara.Model {
  id?: string;
  object?: string;
  modalities?: string[];
  voice?: string;
  inputAudioFormat?: string;
  sampleRate?: number;
  outputAudioFormat?: string;
  turnDetection?: SessionCreatedSessionTurnDetection;
  translation?: SessionCreatedSessionTranslation;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      object: 'object',
      modalities: 'modalities',
      voice: 'voice',
      inputAudioFormat: 'input_audio_format',
      sampleRate: 'sample_rate',
      outputAudioFormat: 'output_audio_format',
      turnDetection: 'turn_detection',
      translation: 'translation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      object: 'string',
      modalities: { 'type': 'array', 'itemType': 'string' },
      voice: 'string',
      inputAudioFormat: 'string',
      sampleRate: 'number',
      outputAudioFormat: 'string',
      turnDetection: SessionCreatedSessionTurnDetection,
      translation: SessionCreatedSessionTranslation,
    };
  }

  validate() {
    if(Array.isArray(this.modalities)) {
      $dara.Model.validateArray(this.modalities);
    }
    if(this.turnDetection && typeof (this.turnDetection as any).validate === 'function') {
      (this.turnDetection as any).validate();
    }
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionCreated extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  causedBy?: string;
  createdAt?: number;
  expiresAt?: number;
  session?: SessionCreatedSession;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      causedBy: 'caused_by',
      createdAt: 'created_at',
      expiresAt: 'expires_at',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      causedBy: 'string',
      createdAt: 'number',
      expiresAt: 'number',
      session: SessionCreatedSession,
    };
  }

  validate() {
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

