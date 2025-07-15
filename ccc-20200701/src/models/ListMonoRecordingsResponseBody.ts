// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMonoRecordingsResponseBodyData extends $dara.Model {
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
   * 5903871
   */
  duration?: string;
  /**
   * @example
   * job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.wav
   */
  fileName?: string;
  /**
   * @example
   * https://ccc-v2-shanghai.oss-cn-shanghai.aliyuncs.com/ccc-test/job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.wav?Expires=1657014031&OSSAccessKeyId=****&Signature=****
   */
  fileUrl?: string;
  /**
   * @example
   * 26972543893791****
   */
  ramId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 1620259200000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      contactId: 'ContactId',
      duration: 'Duration',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      ramId: 'RamId',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contactId: 'string',
      duration: 'string',
      fileName: 'string',
      fileUrl: 'string',
      ramId: 'string',
      skillGroupId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonoRecordingsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListMonoRecordingsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * E836EF2A-EDAE-5310-8921-F983C967D42D
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
      data: { 'type': 'array', 'itemType': ListMonoRecordingsResponseBodyData },
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

