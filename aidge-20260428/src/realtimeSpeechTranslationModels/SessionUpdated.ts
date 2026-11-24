// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionUpdatedSessionInputAudio extends $dara.Model {
  format?: string;
  sampleRate?: number;
  channels?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      sampleRate: 'sample_rate',
      channels: 'channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      sampleRate: 'number',
      channels: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionOutputAudioVoice extends $dara.Model {
  mode?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionOutputAudio extends $dara.Model {
  format?: string;
  sampleRate?: number;
  channels?: number;
  voice?: SessionUpdatedSessionOutputAudioVoice;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      sampleRate: 'sample_rate',
      channels: 'channels',
      voice: 'voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      sampleRate: 'number',
      channels: 'number',
      voice: SessionUpdatedSessionOutputAudioVoice,
    };
  }

  validate() {
    if(this.voice && typeof (this.voice as any).validate === 'function') {
      (this.voice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionOutput extends $dara.Model {
  modalities?: string[];
  audio?: SessionUpdatedSessionOutputAudio;
  static names(): { [key: string]: string } {
    return {
      modalities: 'modalities',
      audio: 'audio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modalities: { 'type': 'array', 'itemType': 'string' },
      audio: SessionUpdatedSessionOutputAudio,
    };
  }

  validate() {
    if(Array.isArray(this.modalities)) {
      $dara.Model.validateArray(this.modalities);
    }
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionTranscription extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionTurnDetection extends $dara.Model {
  type?: string;
  threshold?: number;
  silenceDurationMs?: number;
  prefixPaddingMs?: number;
  createResponse?: boolean;
  interruptResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      threshold: 'threshold',
      silenceDurationMs: 'silence_duration_ms',
      prefixPaddingMs: 'prefix_padding_ms',
      createResponse: 'create_response',
      interruptResponse: 'interrupt_response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      threshold: 'number',
      silenceDurationMs: 'number',
      prefixPaddingMs: 'number',
      createResponse: 'boolean',
      interruptResponse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionTranslationCorpus extends $dara.Model {
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

export class SessionUpdatedSessionTranslation extends $dara.Model {
  language?: string;
  corpus?: SessionUpdatedSessionTranslationCorpus;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      corpus: 'corpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      corpus: SessionUpdatedSessionTranslationCorpus,
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

export class SessionUpdatedSessionVoiceCloneOptions extends $dara.Model {
  frequency?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'frequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSessionInputAudioTranscription extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * 开启时回显指定语种，自动识别回显 auto；关闭时统一回显 auto。
   * 
   * This parameter is required.
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdatedSession extends $dara.Model {
  mode?: string;
  languagePair?: string[];
  inputAudio?: SessionUpdatedSessionInputAudio;
  output?: SessionUpdatedSessionOutput;
  transcription?: SessionUpdatedSessionTranscription;
  turnDetection?: SessionUpdatedSessionTurnDetection;
  id?: string;
  object?: string;
  modalities?: string[];
  voice?: string;
  inputAudioFormat?: string;
  sampleRate?: number;
  outputAudioFormat?: string;
  translation?: SessionUpdatedSessionTranslation;
  enableVoiceClone?: boolean;
  voiceCloneOptions?: SessionUpdatedSessionVoiceCloneOptions;
  /**
   * @remarks
   * 单向回执固定包含 enabled、language；双向使用 transcription 字段。内部转写 model 不对客回显。
   */
  inputAudioTranscription?: SessionUpdatedSessionInputAudioTranscription;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      languagePair: 'language_pair',
      inputAudio: 'input_audio',
      output: 'output',
      transcription: 'transcription',
      turnDetection: 'turn_detection',
      id: 'id',
      object: 'object',
      modalities: 'modalities',
      voice: 'voice',
      inputAudioFormat: 'input_audio_format',
      sampleRate: 'sample_rate',
      outputAudioFormat: 'output_audio_format',
      translation: 'translation',
      enableVoiceClone: 'enable_voice_clone',
      voiceCloneOptions: 'voice_clone_options',
      inputAudioTranscription: 'input_audio_transcription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      languagePair: { 'type': 'array', 'itemType': 'string' },
      inputAudio: SessionUpdatedSessionInputAudio,
      output: SessionUpdatedSessionOutput,
      transcription: SessionUpdatedSessionTranscription,
      turnDetection: SessionUpdatedSessionTurnDetection,
      id: 'string',
      object: 'string',
      modalities: { 'type': 'array', 'itemType': 'string' },
      voice: 'string',
      inputAudioFormat: 'string',
      sampleRate: 'number',
      outputAudioFormat: 'string',
      translation: SessionUpdatedSessionTranslation,
      enableVoiceClone: 'boolean',
      voiceCloneOptions: SessionUpdatedSessionVoiceCloneOptions,
      inputAudioTranscription: SessionUpdatedSessionInputAudioTranscription,
    };
  }

  validate() {
    if(Array.isArray(this.languagePair)) {
      $dara.Model.validateArray(this.languagePair);
    }
    if(this.inputAudio && typeof (this.inputAudio as any).validate === 'function') {
      (this.inputAudio as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.transcription && typeof (this.transcription as any).validate === 'function') {
      (this.transcription as any).validate();
    }
    if(this.turnDetection && typeof (this.turnDetection as any).validate === 'function') {
      (this.turnDetection as any).validate();
    }
    if(Array.isArray(this.modalities)) {
      $dara.Model.validateArray(this.modalities);
    }
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    if(this.voiceCloneOptions && typeof (this.voiceCloneOptions as any).validate === 'function') {
      (this.voiceCloneOptions as any).validate();
    }
    if(this.inputAudioTranscription && typeof (this.inputAudioTranscription as any).validate === 'function') {
      (this.inputAudioTranscription as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdated extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  causedBy?: string;
  warnings?: string[];
  session?: SessionUpdatedSession;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      causedBy: 'caused_by',
      warnings: 'warnings',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      causedBy: 'string',
      warnings: { 'type': 'array', 'itemType': 'string' },
      session: SessionUpdatedSession,
    };
  }

  validate() {
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

