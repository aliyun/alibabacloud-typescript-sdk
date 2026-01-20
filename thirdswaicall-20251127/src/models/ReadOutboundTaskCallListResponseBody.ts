// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ReadOutboundTaskCallListResponseBodyRecordsDialogueList extends $dara.Model {
  /**
   * @example
   * 1000
   */
  beginTime?: number;
  /**
   * @example
   * 5000
   */
  endTime?: number;
  /**
   * @example
   * agent
   */
  role?: string;
  /**
   * @example
   * 您好，请问有什么可以帮助您？
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      role: 'Role',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      role: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadOutboundTaskCallListResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * 2025-09-23 19:38:44
   */
  callEndTime?: string;
  /**
   * @example
   * call_123456
   */
  callId?: string;
  /**
   * @example
   * 2025-09-23 19:34:12
   */
  callStartTime?: string;
  /**
   * @example
   * 客户对双十一活动很感兴趣
   */
  callSummary?: string;
  /**
   * @example
   * normal
   */
  channel?: string;
  /**
   * @example
   * 张先生
   */
  customerName?: string;
  /**
   * @example
   * 131****9908
   */
  customerPhone?: string;
  /**
   * @example
   * []
   */
  dialogueList?: ReadOutboundTaskCallListResponseBodyRecordsDialogueList[];
  /**
   * @example
   * 已接通
   */
  displayStatus?: string;
  /**
   * @example
   * 272
   */
  duration?: number;
  /**
   * @example
   * 4m32s
   */
  durationText?: string;
  /**
   * @example
   * {"123":"122"}
   */
  extInfo?: string;
  /**
   * @example
   * 2025-09-23 19:34:12
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-09-23 19:34:12
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * instance_001
   */
  instanceId?: string;
  /**
   * @example
   * ["有意向", "高净值"]
   */
  labelTags?: string[];
  /**
   * @example
   * true
   */
  recordDetailReady?: boolean;
  /**
   * @example
   * https://xxx.com/record.mp3
   */
  recordUrl?: string;
  /**
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 3
   */
  status?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @example
   * tenant_001
   */
  tenantId?: string;
  /**
   * @example
   * xiaomei
   */
  ttsVoiceCode?: string;
  /**
   * @example
   * 小美(声音甜美)
   */
  ttsVoiceDesc?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callEndTime: 'CallEndTime',
      callId: 'CallId',
      callStartTime: 'CallStartTime',
      callSummary: 'CallSummary',
      channel: 'Channel',
      customerName: 'CustomerName',
      customerPhone: 'CustomerPhone',
      dialogueList: 'DialogueList',
      displayStatus: 'DisplayStatus',
      duration: 'Duration',
      durationText: 'DurationText',
      extInfo: 'ExtInfo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      labelTags: 'LabelTags',
      recordDetailReady: 'RecordDetailReady',
      recordUrl: 'RecordUrl',
      retryCount: 'RetryCount',
      sceneId: 'SceneId',
      status: 'Status',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      ttsVoiceCode: 'TtsVoiceCode',
      ttsVoiceDesc: 'TtsVoiceDesc',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callEndTime: 'string',
      callId: 'string',
      callStartTime: 'string',
      callSummary: 'string',
      channel: 'string',
      customerName: 'string',
      customerPhone: 'string',
      dialogueList: { 'type': 'array', 'itemType': ReadOutboundTaskCallListResponseBodyRecordsDialogueList },
      displayStatus: 'string',
      duration: 'number',
      durationText: 'string',
      extInfo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      labelTags: { 'type': 'array', 'itemType': 'string' },
      recordDetailReady: 'boolean',
      recordUrl: 'string',
      retryCount: 'number',
      sceneId: 'string',
      status: 'string',
      taskId: 'string',
      tenantId: 'string',
      ttsVoiceCode: 'string',
      ttsVoiceDesc: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    if(Array.isArray(this.labelTags)) {
      $dara.Model.validateArray(this.labelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadOutboundTaskCallListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  records?: ReadOutboundTaskCallListResponseBodyRecords[];
  /**
   * @example
   * 202BFA44-28D8-571E-B992-BA70F2E92FB0
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 1743387963
   */
  timestamp?: string;
  /**
   * @example
   * 3
   */
  total?: number;
  /**
   * @example
   * F47D4976-FC5A-5687-A890-B7923D3B429B
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      message: 'Message',
      records: 'Records',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      timestamp: 'Timestamp',
      total: 'Total',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      message: 'string',
      records: { 'type': 'array', 'itemType': ReadOutboundTaskCallListResponseBodyRecords },
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      timestamp: 'string',
      total: 'number',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

