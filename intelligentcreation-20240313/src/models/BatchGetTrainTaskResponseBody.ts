// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial extends $dara.Model {
  /**
   * @example
   * 1
   */
  voiceId?: number;
  /**
   * @example
   * zh
   */
  voiceLanguage?: string;
  /**
   * @example
   * http://www.voice.com
   */
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      voiceUrl: 'voiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      voiceId: 'number',
      voiceLanguage: 'string',
      voiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskResponseBodyVoiceList extends $dara.Model {
  /**
   * @example
   * 1524004782438111
   */
  aliyunSubId?: string;
  auditFailMessage?: string;
  /**
   * @example
   * auditFail
   */
  auditStatus?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  createTime?: string;
  /**
   * @example
   * M
   */
  gender?: string;
  name?: string;
  /**
   * @example
   * BASIC_MODEL
   */
  resSpecType?: string;
  /**
   * @example
   * 837091359375048704
   */
  taskId?: string;
  /**
   * @example
   * CopyVoice
   */
  taskType?: string;
  trainFailMessage?: string;
  /**
   * @example
   * trainFail
   */
  trainStatus?: string;
  /**
   * @example
   * realTimeInteractivity
   */
  useScene?: string;
  voiceMaterial?: BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial;
  static names(): { [key: string]: string } {
    return {
      aliyunSubId: 'aliyunSubId',
      auditFailMessage: 'auditFailMessage',
      auditStatus: 'auditStatus',
      createTime: 'createTime',
      gender: 'gender',
      name: 'name',
      resSpecType: 'resSpecType',
      taskId: 'taskId',
      taskType: 'taskType',
      trainFailMessage: 'trainFailMessage',
      trainStatus: 'trainStatus',
      useScene: 'useScene',
      voiceMaterial: 'voiceMaterial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunSubId: 'string',
      auditFailMessage: 'string',
      auditStatus: 'string',
      createTime: 'string',
      gender: 'string',
      name: 'string',
      resSpecType: 'string',
      taskId: 'string',
      taskType: 'string',
      trainFailMessage: 'string',
      trainStatus: 'string',
      useScene: 'string',
      voiceMaterial: BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial,
    };
  }

  validate() {
    if(this.voiceMaterial && typeof (this.voiceMaterial as any).validate === 'function') {
      (this.voiceMaterial as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTrainTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 2226A26A-26E5-5AB9-A14A-54D612FCF96A
   */
  requestId?: string;
  voiceList?: BatchGetTrainTaskResponseBodyVoiceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      voiceList: 'voiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      voiceList: { 'type': 'array', 'itemType': BatchGetTrainTaskResponseBodyVoiceList },
    };
  }

  validate() {
    if(Array.isArray(this.voiceList)) {
      $dara.Model.validateArray(this.voiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

