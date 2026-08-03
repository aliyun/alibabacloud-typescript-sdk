// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial extends $dara.Model {
  voiceId?: number;
  voiceLanguage?: string;
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
  aliyunSubId?: string;
  auditFailMessage?: string;
  auditStatus?: string;
  createTime?: string;
  gender?: string;
  name?: string;
  resSpecType?: string;
  taskId?: string;
  taskType?: string;
  trainFailMessage?: string;
  trainStatus?: string;
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

