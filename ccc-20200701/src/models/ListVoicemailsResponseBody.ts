// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicemailsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 0533128****
   */
  callee?: string;
  /**
   * @example
   * 073xxxx7539
   */
  caller?: string;
  cdrStartTime?: number;
  /**
   * @example
   * job-125152394144124921
   */
  contactId?: string;
  /**
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * voicemail-test
   */
  name?: string;
  recordingDuration?: number;
  /**
   * @example
   * 1631440860000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      cdrStartTime: 'CdrStartTime',
      contactId: 'ContactId',
      duration: 'Duration',
      instanceId: 'InstanceId',
      name: 'Name',
      recordingDuration: 'RecordingDuration',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      cdrStartTime: 'number',
      contactId: 'string',
      duration: 'number',
      instanceId: 'string',
      name: 'string',
      recordingDuration: 'number',
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

export class ListVoicemailsResponseBodyData extends $dara.Model {
  list?: ListVoicemailsResponseBodyDataList[];
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
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListVoicemailsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicemailsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListVoicemailsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListVoicemailsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

