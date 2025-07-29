// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos extends $dara.Model {
  /**
   * @example
   * 2025-03-12 14:52:42
   */
  createTime?: string;
  /**
   * @example
   * 1272118248844842
   */
  creator?: string;
  scriptContent?: string;
  /**
   * @example
   * init version
   */
  versionesDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      scriptContent: 'ScriptContent',
      versionesDescription: 'VersionesDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      scriptContent: 'string',
      versionesDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobScriptHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * -
   */
  jobScriptHistoryInfos?: ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos[];
  static names(): { [key: string]: string } {
    return {
      jobScriptHistoryInfos: 'JobScriptHistoryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobScriptHistoryInfos: { 'type': 'array', 'itemType': ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos },
    };
  }

  validate() {
    if(Array.isArray(this.jobScriptHistoryInfos)) {
      $dara.Model.validateArray(this.jobScriptHistoryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobScriptHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListJobScriptHistoryResponseBodyData;
  /**
   * @example
   * job is not existed, jobId=302
   */
  message?: string;
  /**
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListJobScriptHistoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

