// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicemailsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 0533128****
   */
  callee?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 073xxxx7539
   */
  caller?: string;
  /**
   * @remarks
   * The start time of the call.
   * 
   * @example
   * 1532448000000，已废弃，请使用StartTime。
   */
  cdrStartTime?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * job-125152394144124921
   */
  contactId?: string;
  /**
   * @remarks
   * The duration of the voicemail message in seconds.
   * 
   * @example
   * 16
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the CC instance.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the voicemail.
   * 
   * @example
   * voicemail-test
   */
  name?: string;
  /**
   * @remarks
   * The duration of the voicemail message in seconds.
   * 
   * @example
   * 10，已废弃，请使用Duration
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The start time of the voicemail.
   * 
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
  /**
   * @remarks
   * The list of voicemail records.
   */
  list?: ListVoicemailsResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries. This parameter is returned only when \\`PageNumber\\` is set to 1. For other values of \\`PageNumber\\`, this parameter returns 0.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListVoicemailsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

