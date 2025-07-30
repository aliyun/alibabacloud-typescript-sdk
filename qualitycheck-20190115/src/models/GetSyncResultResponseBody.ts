// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyncResultResponseBodyDataAgent extends $dara.Model {
  /**
   * @example
   * 12221
   */
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAsrResult extends $dara.Model {
  /**
   * @example
   * 340
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3000
   */
  end?: number;
  role?: string;
  /**
   * @example
   * 11
   */
  silenceDuration?: number;
  /**
   * @example
   * 221
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsKeyWords extends $dara.Model {
  /**
   * @example
   * 66666
   */
  cid?: string;
  /**
   * @example
   * 2
   */
  from?: number;
  /**
   * @example
   * 5
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      to: 'number',
      val: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsPhrase extends $dara.Model {
  /**
   * @example
   * 440
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 4000
   */
  end?: number;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  /**
   * @example
   * 234
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHits extends $dara.Model {
  cid?: string[];
  keyWords?: GetSyncResultResponseBodyDataHitResultHitsKeyWords[];
  phrase?: GetSyncResultResponseBodyDataHitResultHitsPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHitsKeyWords },
      phrase: GetSyncResultResponseBodyDataHitResultHitsPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.cid)) {
      $dara.Model.validateArray(this.cid);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    if(this.phrase && typeof (this.phrase as any).validate === 'function') {
      (this.phrase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResult extends $dara.Model {
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  name?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @example
   * 1211
   */
  rid?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHits },
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hits)) {
      $dara.Model.validateArray(this.hits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataRecording extends $dara.Model {
  business?: string;
  /**
   * @example
   * xxx
   */
  callId?: string;
  /**
   * @example
   * 1563967699000
   */
  callTime?: string;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 1888888***
   */
  callee?: string;
  /**
   * @example
   * 0108888****
   */
  caller?: string;
  /**
   * @example
   * xxx
   */
  dataSetName?: string;
  /**
   * @example
   * 232
   */
  duration?: number;
  /**
   * @example
   * 120
   */
  durationAudio?: number;
  /**
   * @example
   * xxxx
   */
  id?: string;
  /**
   * @example
   * 123123.wav
   */
  name?: string;
  /**
   * @example
   * xxxx
   */
  primaryId?: string;
  /**
   * @example
   * xxx
   */
  remark1?: string;
  /**
   * @example
   * xxx
   */
  remark2?: string;
  /**
   * @example
   * xxx
   */
  remark3?: string;
  /**
   * @example
   * http://aliyun.com/xxx.wav
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      durationAudio: 'DurationAudio',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark2: 'Remark2',
      remark3: 'Remark3',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      dataSetName: 'string',
      duration: 'number',
      durationAudio: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark2: 'string',
      remark3: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyData extends $dara.Model {
  agent?: GetSyncResultResponseBodyDataAgent;
  asrResult?: GetSyncResultResponseBodyDataAsrResult[];
  /**
   * @example
   * xxx
   */
  comments?: string;
  /**
   * @example
   * 2019-07-24T19:31Z
   */
  createTime?: string;
  /**
   * @example
   * xxxx
   */
  errorMessage?: string;
  hitResult?: GetSyncResultResponseBodyDataHitResult[];
  recording?: GetSyncResultResponseBodyDataRecording;
  resolver?: string;
  /**
   * @example
   * 3
   */
  reviewResult?: number;
  /**
   * @example
   * 1
   */
  reviewStatus?: number;
  reviewer?: string;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 20201231de3d34ec-40fa-4a55-8d27-76ea*****
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      comments: 'Comments',
      createTime: 'CreateTime',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewer: 'Reviewer',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetSyncResultResponseBodyDataAgent,
      asrResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataAsrResult },
      comments: 'string',
      createTime: 'string',
      errorMessage: 'string',
      hitResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResult },
      recording: GetSyncResultResponseBodyDataRecording,
      resolver: 'string',
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewer: 'string',
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(Array.isArray(this.asrResult)) {
      $dara.Model.validateArray(this.asrResult);
    }
    if(Array.isArray(this.hitResult)) {
      $dara.Model.validateArray(this.hitResult);
    }
    if(this.recording && typeof (this.recording as any).validate === 'function') {
      (this.recording as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  data?: GetSyncResultResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F****
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  resultCountId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': GetSyncResultResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

