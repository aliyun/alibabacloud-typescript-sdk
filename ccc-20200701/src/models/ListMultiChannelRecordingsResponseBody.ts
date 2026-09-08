// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments extends $dara.Model {
  /**
   * @remarks
   * The end time of the call hold, in milliseconds.
   * 
   * @example
   * 1687860143925
   */
  endTime?: number;
  /**
   * @remarks
   * Call hold start time, in milliseconds.
   * 
   * @example
   * 1673255098049
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiChannelRecordingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent call channel ID.
   * 
   * @example
   * ch-user-8526899****-8602****-1656926504363-job-25920271311543****
   */
  agentChannelId?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Agent name.
   * 
   * @example
   * 坐席小王
   */
  agentName?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @remarks
   * Recording duration, in milliseconds.
   * 
   * @example
   * 56321
   */
  duration?: string;
  /**
   * @remarks
   * Recording file name.
   * 
   * @example
   * job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.mkv
   */
  fileName?: string;
  /**
   * @remarks
   * OSS download URL for the recording file. Note the time-to-live (TTL) of the download URL. The download URL is valid for 1 day.
   * 
   * @example
   * https://ccc-v2-shanghai.oss-cn-shanghai.aliyuncs.com/ccc-test/job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.mkv?Expires=1657014031&OSSAccessKeyId=****&Signature=****
   */
  fileUrl?: string;
  /**
   * @remarks
   * List of call hold time segments.
   */
  holdTimeSegments?: ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments[];
  /**
   * @remarks
   * RAM account ID for the agent.
   * 
   * @example
   * 22807673106369****
   */
  ramId?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Recording start time, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1656926518491
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentChannelId: 'AgentChannelId',
      agentId: 'AgentId',
      agentName: 'AgentName',
      contactId: 'ContactId',
      duration: 'Duration',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      holdTimeSegments: 'HoldTimeSegments',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentChannelId: 'string',
      agentId: 'string',
      agentName: 'string',
      contactId: 'string',
      duration: 'string',
      fileName: 'string',
      fileUrl: 'string',
      holdTimeSegments: { 'type': 'array', 'itemType': ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments },
      ramId: 'string',
      skillGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.holdTimeSegments)) {
      $dara.Model.validateArray(this.holdTimeSegments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiChannelRecordingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Recording list.
   */
  data?: ListMultiChannelRecordingsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B19CD719-9F65-56A6-8B79-DA4282EA4797
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMultiChannelRecordingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

