// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyncResultResponseBodyDataAgent extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 12221
   */
  id?: string;
  /**
   * @remarks
   * Agent name
   * 
   * @example
   * 李四
   */
  name?: string;
  /**
   * @remarks
   * Skill group name
   * 
   * @example
   * 客服组
   */
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
   * @remarks
   * The start time of this sentence, which is the offset from the starting point in milliseconds.
   * 
   * @example
   * 340
   */
  begin?: number;
  /**
   * @remarks
   * Emotion intensity value ranging from 1 to 10. A higher value indicates stronger emotion.
   * 
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @remarks
   * The end time of this sentence, which is the offset from the starting point in milliseconds.
   * 
   * @example
   * 3000
   */
  end?: number;
  /**
   * @remarks
   * Role in the dialogue content. Possible values: agent, Customer.
   * 
   * @example
   * 客服
   */
  role?: string;
  /**
   * @remarks
   * Internal field. Ignore it.
   * 
   * @example
   * 11
   */
  silenceDuration?: number;
  /**
   * @remarks
   * The average speech rate of this sentence, in characters per minute.
   * 
   * @example
   * 221
   */
  speechRate?: number;
  /**
   * @remarks
   * Dialogue content.
   * 
   * @example
   * 您好，很高兴为您服务
   */
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
   * @remarks
   * The ID of the condition that was hit.
   * 
   * @example
   * 66666
   */
  cid?: string;
  /**
   * @remarks
   * The starting character position (inclusive) of the keyword to be highlighted. The value starts from 0 and can be at most the total number of characters in the sentence minus 1.
   * 
   * @example
   * 2
   */
  from?: number;
  /**
   * @remarks
   * The ending character position (exclusive) of the keyword to be highlighted. The maximum value is the total number of characters in the sentence minus 1. For example, in the sentence “不可能给你退货的”, if from=0 and to=3, the highlighted keyword is “不可能”, which consists of three characters.
   * 
   * @example
   * 5
   */
  to?: number;
  /**
   * @remarks
   * The exact keyword content.
   * 
   * @example
   * 投诉
   */
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
   * @remarks
   * The Start Time of this sentence, represented as an offset in milliseconds from the starting point.
   * 
   * @example
   * 440
   */
  begin?: number;
  /**
   * @remarks
   * Emotion intensity value ranging from 1 to 10. A higher value indicates stronger emotion.
   * 
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @remarks
   * The End Time of this sentence, represented as an offset in milliseconds from the starting point.
   * 
   * @example
   * 4000
   */
  end?: number;
  /**
   * @remarks
   * The role in the conversation content. Possible values: agent, Customer, System.
   * 
   * @example
   * 客服
   */
  role?: string;
  /**
   * @remarks
   * Internal field. Ignore.
   * 
   * @example
   * 1
   */
  silenceDuration?: number;
  /**
   * @remarks
   * The speech rate of this sentence.
   * 
   * @example
   * 234
   */
  speechRate?: number;
  /**
   * @remarks
   * A sentence spoken by this role.
   * 
   * @example
   * 我要投诉
   */
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
  /**
   * @remarks
   * List of hit condition IDs.
   */
  cid?: string[];
  /**
   * @remarks
   * Returns the specific characters in the current sentence that hit the rule, which are the keywords to be highlighted.
   */
  keyWords?: GetSyncResultResponseBodyDataHitResultHitsKeyWords[];
  /**
   * @remarks
   * Details of the sentence that hit the current rule.
   */
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
  /**
   * @remarks
   * Specific hit location information. At the sentence dimension, returns which condition in the rule was hit and which specific characters triggered the hit within the sentence.
   */
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  /**
   * @remarks
   * Hit rule name.
   * 
   * @example
   * 测试规则
   */
  name?: string;
  /**
   * @remarks
   * Review accuracy; possible values: 0 (fault); 1 (correct).
   * 
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @remarks
   * Hit rule ID.
   * 
   * @example
   * 1211
   */
  rid?: string;
  /**
   * @remarks
   * Rule type associated with the hit rule.
   * 
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
  /**
   * @remarks
   * Line-of-business name.
   * 
   * @example
   * 客服部
   */
  business?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * xxx
   */
  callId?: string;
  /**
   * @remarks
   * Recording generation UNIX timestamp, accurate to milliseconds.
   * 
   * @example
   * 1563967699000
   */
  callTime?: string;
  /**
   * @remarks
   * Call type:  
   * - 1: Outgoing call  
   * - 3: Incoming call
   * 
   * @example
   * 1
   */
  callType?: number;
  /**
   * @remarks
   * Callee number.
   * 
   * @example
   * 1888888***
   */
  callee?: string;
  /**
   * @remarks
   * Caller number.
   * 
   * @example
   * 0108888****
   */
  caller?: string;
  /**
   * @remarks
   * Internal field. Ignore this.
   * 
   * @example
   * xxx
   */
  dataSetName?: string;
  /**
   * @remarks
   * Total number of words in the conversation.
   * 
   * @example
   * 232
   */
  duration?: number;
  /**
   * @remarks
   * Call duration.
   * 
   * @example
   * 120
   */
  durationAudio?: number;
  /**
   * @remarks
   * File ID, which is the callId in the request parameters. If not specified, a random ID will be generated.
   * 
   * @example
   * xxxx
   */
  id?: string;
  /**
   * @remarks
   * Recording file name.
   * 
   * @example
   * 123123.wav
   */
  name?: string;
  /**
   * @remarks
   * Internal field. Ignore it.
   * 
   * @example
   * xxxx
   */
  primaryId?: string;
  /**
   * @remarks
   * Custom data 1.
   * 
   * @example
   * xxx
   */
  remark1?: string;
  /**
   * @remarks
   * Custom data 2.
   * 
   * @example
   * xxx
   */
  remark2?: string;
  /**
   * @remarks
   * Custom data 3.
   * 
   * @example
   * xxx
   */
  remark3?: string;
  /**
   * @remarks
   * Recording file URL, used for playback.
   * 
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
  /**
   * @remarks
   * Agent information
   */
  agent?: GetSyncResultResponseBodyDataAgent;
  /**
   * @remarks
   * Transcription result (dialogue text)
   */
  asrResult?: GetSyncResultResponseBodyDataAsrResult[];
  /**
   * @remarks
   * Review comments.
   * 
   * @example
   * xxx
   */
  comments?: string;
  /**
   * @remarks
   * Job Creation Time.
   * 
   * @example
   * 2019-07-24T19:31Z
   */
  createTime?: string;
  /**
   * @remarks
   * When status is neither 0 nor 1, this field indicates the Error Details.
   * 
   * @example
   * xxxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * Rule hit result.
   */
  hitResult?: GetSyncResultResponseBodyDataHitResult[];
  /**
   * @remarks
   * Recording file information
   */
  recording?: GetSyncResultResponseBodyDataRecording;
  /**
   * @remarks
   * The quality inspector who actually reviewed the task.
   * 
   * @example
   * 张三
   */
  resolver?: string;
  /**
   * @remarks
   * Review accuracy. Possible values: 0 (fault); 1 (correct); 2 (partially correct); 3 (pending review).
   * 
   * @example
   * 3
   */
  reviewResult?: number;
  /**
   * @remarks
   * Review status; possible values: 0 (not reviewed); 1 (reviewed).
   * 
   * @example
   * 1
   */
  reviewStatus?: number;
  /**
   * @remarks
   * Username of the assigned quality inspector.
   * 
   * @example
   * 张三
   */
  reviewer?: string;
  /**
   * @remarks
   * Quality inspection score, with a maximum of 100.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * Current job status. Possible values: 0 (not completed); 1 (completed). The caller can use this field to determine whether the job is complete. Values other than 0 or 1 indicate an error; see the errorMessage field for Error Details.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 20201231de3d34ec-40fa-4a55-8d27-76ea*****
   */
  taskId?: string;
  /**
   * @remarks
   * Internal field. Ignore it.
   * 
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
   * @remarks
   * Result code. A value of 200 indicates success. Any other value indicates failure. The caller can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Query result.
   */
  data?: GetSyncResultResponseBodyData[];
  /**
   * @remarks
   * Error details when an error occurs; "successful" when the operation succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Internal field. Ignore it.
   * 
   * @example
   * xxx
   */
  resultCountId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. The caller can use this field to determine the request status: true indicates success; false or null indicates failure.
   * 
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

