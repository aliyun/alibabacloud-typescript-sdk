// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAudioFilesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Audio file name.
   * 
   * @example
   * test-file.wav
   */
  audioFileName?: string;
  /**
   * @remarks
   * Audio resource ID, which is the UUID of the audio file.
   * 
   * @example
   * d5cd7a94-3b6a-47d2-b7fd-0b1cd839bf77
   */
  audioResourceId?: string;
  /**
   * @remarks
   * Audio content threat review result.
   * 
   * @example
   * 无
   */
  auditResult?: string;
  /**
   * @remarks
   * The creation time of the audio resource.
   * 
   * @example
   * 2021-03-05 17:35:45.0
   */
  createdTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Display name of the audio resource.
   * 
   * @example
   * 欢迎语
   */
  name?: string;
  /**
   * @remarks
   * The key of the audio resource file in OSS.
   * 
   * @example
   * ccc-test/test-file.wav
   */
  ossFileKey?: string;
  /**
   * @remarks
   * The status of the audio file.
   * 
   * @example
   * Completed
   */
  status?: string;
  /**
   * @remarks
   * Last modified time of the audio resource.
   * 
   * @example
   * 2021-03-08 15:34:49.0
   */
  updatedTime?: string;
  /**
   * @remarks
   * The usage of the audio file. The default value is General (used in scenarios such as IVR). Other optional values include HoldMusic (hold music during call waiting).
   * 
   * @example
   * General
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      auditResult: 'AuditResult',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      status: 'Status',
      updatedTime: 'UpdatedTime',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      auditResult: 'string',
      createdTime: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      status: 'string',
      updatedTime: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAudioFilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of audio files.
   */
  list?: ListAudioFilesResponseBodyDataList[];
  /**
   * @remarks
   * The page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
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
      list: { 'type': 'array', 'itemType': ListAudioFilesResponseBodyDataList },
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

export class ListAudioFilesResponseBody extends $dara.Model {
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
   * The data.
   */
  data?: ListAudioFilesResponseBodyData;
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
   * 53223330-EBF1-586B-A2CB-93C3B711FDA0
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
      data: ListAudioFilesResponseBodyData,
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

