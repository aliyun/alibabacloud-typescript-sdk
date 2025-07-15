// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments extends $dara.Model {
  endTime?: number;
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
   * @example
   * ch-user-8526899****-8602****-1656926504363-job-25920271311543****
   */
  agentChannelId?: string;
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @example
   * 56321
   */
  duration?: string;
  /**
   * @example
   * job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.mkv
   */
  fileName?: string;
  /**
   * @example
   * https://ccc-v2-shanghai.oss-cn-shanghai.aliyuncs.com/ccc-test/job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.mkv?Expires=1657014031&OSSAccessKeyId=****&Signature=****
   */
  fileUrl?: string;
  holdTimeSegments?: ListMultiChannelRecordingsResponseBodyDataHoldTimeSegments[];
  /**
   * @example
   * 22807673106369****
   */
  ramId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListMultiChannelRecordingsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

