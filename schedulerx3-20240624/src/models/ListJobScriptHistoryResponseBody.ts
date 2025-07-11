// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobScriptHistoryResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 2025-06-29 15:56:36
   */
  createTime?: string;
  /**
   * @example
   * 1963096506470832
   */
  creator?: string;
  scriptContent?: string;
  /**
   * @example
   * init version
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      scriptContent: 'ScriptContent',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      scriptContent: 'string',
      versionDescription: 'string',
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
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * -
   */
  records?: ListJobScriptHistoryResponseBodyDataRecords[];
  /**
   * @example
   * 21
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ListJobScriptHistoryResponseBodyDataRecords },
      total: 'string',
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
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * not support query script history, please upgrade engine version to 2.2.2+
   */
  message?: string;
  /**
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
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
      maxResults: 'MaxResults',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListJobScriptHistoryResponseBodyData,
      maxResults: 'number',
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

