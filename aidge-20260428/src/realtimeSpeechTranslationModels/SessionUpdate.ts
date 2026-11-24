// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionUpdateSessionInputAudio extends $dara.Model {
  format?: string;
  /**
   * @example
   * 16000
   */
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

export class SessionUpdateSessionOutputAudioVoice extends $dara.Model {
  mode?: string;
  /**
   * @remarks
   * 非空且不能含控制字符，最长128字符；具体音色支持范围由模型校验。
   * 
   * @example
   * Tina
   */
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

export class SessionUpdateSessionOutputAudio extends $dara.Model {
  format?: string;
  sampleRate?: number;
  channels?: number;
  /**
   * @remarks
   * 仅支持 preset；不支持 clone_frequency。id 省略或为 default 时后端使用 Tina。
   */
  voice?: SessionUpdateSessionOutputAudioVoice;
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
      voice: SessionUpdateSessionOutputAudioVoice,
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

export class SessionUpdateSessionOutput extends $dara.Model {
  /**
   * @remarks
   * 必须包含 text，可加 audio；不可重复，不能只有 audio。允许顺序反转，后端规范化为 text、audio。
   */
  modalities?: string[];
  audio?: SessionUpdateSessionOutputAudio;
  static names(): { [key: string]: string } {
    return {
      modalities: 'modalities',
      audio: 'audio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modalities: { 'type': 'array', 'itemType': 'string' },
      audio: SessionUpdateSessionOutputAudio,
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

export class SessionUpdateSessionTranscription extends $dara.Model {
  /**
   * @remarks
   * 省略时后端为 true；关闭输出不会关闭内部语种识别。
   */
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

export class SessionUpdateSessionTurnDetection extends $dara.Model {
  /**
   * @remarks
   * manual 对象仅用于双向；单向手动模式使用整个 turn_detection 为 null。
   */
  type?: string;
  /**
   * @remarks
   * 范围 -1 到 1，后端缺省0.2。
   * 
   * @example
   * 0.2
   */
  threshold?: number;
  /**
   * @remarks
   * 范围200到6000，后端缺省1000。
   * 
   * @example
   * 1000
   */
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

export class SessionUpdateSessionInputAudioTranscription extends $dara.Model {
  /**
   * @remarks
   * 默认 auto，省略或 auto 表示自动识别。开启时保留指定的受支持语种；关闭时忽略本字段。此字段不是翻译目标语言。
   * 
   * @example
   * auto
   */
  language?: string;
  /**
   * @remarks
   * 默认 true。false 时忽略 language，不影响译文和译音。
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

export class SessionUpdateSessionTranslationSameLanguageSkipOptions extends $dara.Model {
  skipText?: boolean;
  skipAudio?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipText: 'skip_text',
      skipAudio: 'skip_audio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipText: 'boolean',
      skipAudio: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdateSessionTranslationCorpus extends $dara.Model {
  /**
   * @remarks
   * 动态 key 为源语言词汇，value 为目标语言译词；不固定热词名称，动态键映射保留需网关实测。
   * 
   * @example
   * {"人工智能":"Artificial Intelligence","机器学习":"Machine Learning"}
   */
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

export class SessionUpdateSessionTranslation extends $dara.Model {
  /**
   * @remarks
   * 例如 en，缺省时模型默认 en；具体支持范围由模型校验。
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * 仅单向 Qwen 3.5 使用，目标语种为 zh 或 en 时生效；源语种等于目标语种时按设置跳过输出。
   */
  sameLanguageSkipOptions?: SessionUpdateSessionTranslationSameLanguageSkipOptions;
  /**
   * @remarks
   * 仅单向原生协议使用；与双向不支持的 glossary 字段不同。
   */
  corpus?: SessionUpdateSessionTranslationCorpus;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      sameLanguageSkipOptions: 'same_language_skip_options',
      corpus: 'corpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      sameLanguageSkipOptions: SessionUpdateSessionTranslationSameLanguageSkipOptions,
      corpus: SessionUpdateSessionTranslationCorpus,
    };
  }

  validate() {
    if(this.sameLanguageSkipOptions && typeof (this.sameLanguageSkipOptions as any).validate === 'function') {
      (this.sameLanguageSkipOptions as any).validate();
    }
    if(this.corpus && typeof (this.corpus as any).validate === 'function') {
      (this.corpus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdateSessionVoiceCloneOptions extends $dara.Model {
  /**
   * @remarks
   * never 使用已有复刻音色；once 会话开始时复刻一次；always 每次输出前复刻。once/always 必须设置 voice=default。
   */
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

export class SessionUpdateSession extends $dara.Model {
  /**
   * @remarks
   * 仅双向使用；可省略，提供时必须为 bidirectional，不能切换模式。
   */
  mode?: string;
  /**
   * @remarks
   * 仅双向使用；可省略，提供时必须与创建时内容及顺序一致。
   */
  languagePair?: string[];
  /**
   * @remarks
   * 仅双向使用；省略时后端使用 pcm_s16le、16000Hz、单声道，不接受 null。
   */
  inputAudio?: SessionUpdateSessionInputAudio;
  /**
   * @remarks
   * 仅双向使用；省略时后端输出 text 和 audio。
   */
  output?: SessionUpdateSessionOutput;
  transcription?: SessionUpdateSessionTranscription;
  /**
   * @remarks
   * 单向 manual 必须显式传 null，VAD 使用 server_vad 对象。双向不接受 null，manual 使用对象；省略时后端为 server_vad。nullable 仅兼容单向，模式约束交后端校验。
   * 
   * **if can be null:**
   * true
   */
  turnDetection?: SessionUpdateSessionTurnDetection;
  /**
   * @remarks
   * 仅单向使用；支持 text 或 text 与 audio，省略时模型默认 text 与 audio。双向使用 output.modalities。
   */
  modalities?: string[];
  /**
   * @remarks
   * 仅单向使用；须与输入音频一致，支持8000或16000。
   * 
   * @example
   * 16000
   */
  sampleRate?: number;
  /**
   * @remarks
   * 仅单向原生协议使用；现有冒烟客户端使用 pcm，opus 尚未在本次实测。双向仅支持 pcm_s16le。
   * 
   * @example
   * pcm
   */
  inputAudioFormat?: string;
  /**
   * @remarks
   * 仅单向使用，仅支持 enabled、language。对象省略或为空时默认开启、自动识别。enabled=false 时忽略 language，关闭原文转写；model 不再接受。默认值由后端补齐，网关不注入。
   */
  inputAudioTranscription?: SessionUpdateSessionInputAudioTranscription;
  /**
   * @remarks
   * 仅单向原生协议使用；双向目标语言来自创建时的语言对，不接受本字段。
   */
  translation?: SessionUpdateSessionTranslation;
  /**
   * @remarks
   * 仅单向译音使用，当前原生协议只支持 pcm。
   * 
   * @example
   * pcm
   */
  outputAudioFormat?: string;
  /**
   * @remarks
   * 未启用复刻时使用预设音色，模型缺省为 Tina。启用复刻且 frequency 为 once/always 时必须为 default；never 时须为已有复刻音色ID。双向使用 output.audio.voice.id。
   * 
   * @example
   * Tina
   */
  voice?: string;
  /**
   * @remarks
   * 仅单向原生协议使用，模型默认 false；开启时联动 voice 和 voice_clone_options，实际可用性由上游校验。本次未实测复刻，双向不支持。
   */
  enableVoiceClone?: boolean;
  /**
   * @remarks
   * 仅 enable_voice_clone=true 时生效；双向不支持本字段。
   */
  voiceCloneOptions?: SessionUpdateSessionVoiceCloneOptions;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      languagePair: 'language_pair',
      inputAudio: 'input_audio',
      output: 'output',
      transcription: 'transcription',
      turnDetection: 'turn_detection',
      modalities: 'modalities',
      sampleRate: 'sample_rate',
      inputAudioFormat: 'input_audio_format',
      inputAudioTranscription: 'input_audio_transcription',
      translation: 'translation',
      outputAudioFormat: 'output_audio_format',
      voice: 'voice',
      enableVoiceClone: 'enable_voice_clone',
      voiceCloneOptions: 'voice_clone_options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      languagePair: { 'type': 'array', 'itemType': 'string' },
      inputAudio: SessionUpdateSessionInputAudio,
      output: SessionUpdateSessionOutput,
      transcription: SessionUpdateSessionTranscription,
      turnDetection: SessionUpdateSessionTurnDetection,
      modalities: { 'type': 'array', 'itemType': 'string' },
      sampleRate: 'number',
      inputAudioFormat: 'string',
      inputAudioTranscription: SessionUpdateSessionInputAudioTranscription,
      translation: SessionUpdateSessionTranslation,
      outputAudioFormat: 'string',
      voice: 'string',
      enableVoiceClone: 'boolean',
      voiceCloneOptions: SessionUpdateSessionVoiceCloneOptions,
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
    if(this.inputAudioTranscription && typeof (this.inputAudioTranscription as any).validate === 'function') {
      (this.inputAudioTranscription as any).validate();
    }
    if(this.translation && typeof (this.translation as any).validate === 'function') {
      (this.translation as any).validate();
    }
    if(this.voiceCloneOptions && typeof (this.voiceCloneOptions as any).validate === 'function') {
      (this.voiceCloneOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SessionUpdate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * 可省略；提供时必须为非空、非纯空白字符串。
   * 
   * @example
   * evt_update_1
   */
  eventId?: string;
  /**
   * @remarks
   * 仅填写当前模式适用字段。双向必须提供 session 对象，仅允许输入前更新；单向按 Qwen 3.5 原生契约可省略 session。
   * 双向不支持 glossary、声音复刻及单向平铺配置，模式、语言对、条件必填及能力校验由后端执行。网关不补默认值。
   * 单向手动提交、关闭转写：{"modalities":["text"],"sample_rate":16000,"input_audio_format":"pcm","input_audio_transcription":{"enabled":false},"translation":{"language":"en"},"turn_detection":null}
   * 单向 VAD、译音与转写：{"modalities":["text","audio"],"sample_rate":16000,"input_audio_format":"pcm","input_audio_transcription":{"enabled":true,"language":"auto"},"translation":{"language":"en"},"turn_detection":{"type":"server_vad","threshold":0.2,"silence_duration_ms":1000},"output_audio_format":"pcm","voice":"Tina","enable_voice_clone":false}
   * 双向手动提交、仅译文：{"input_audio":{"format":"pcm_s16le","sample_rate":16000,"channels":1},"output":{"modalities":["text"]},"transcription":{"enabled":false},"turn_detection":{"type":"manual"}}
   * 双向 VAD、译文与译音：{"input_audio":{"format":"pcm_s16le","sample_rate":16000,"channels":1},"output":{"modalities":["text","audio"],"audio":{"format":"pcm_s16le","sample_rate":24000,"channels":1,"voice":{"mode":"preset","id":"Tina"}}},"transcription":{"enabled":true},"turn_detection":{"type":"server_vad","threshold":0.2,"silence_duration_ms":1000}}
   * 单向扩展字段依据百炼 live-translator-client-events；新增原生字段须同步登记。显式 null 和热词动态键的映射保留行为仍需网关实测。
   */
  session?: SessionUpdateSession;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      session: SessionUpdateSession,
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

