// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobScriptHistoryResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the script version was created.
   * 
   * @example
   * 2025-06-29 15:56:36
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the script version.
   * 
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @remarks
   * The content of the script.
   * 
   * @example
   * #!/bin/bash
   * echo "xxl-job: hello shell"
   * 
   * echo "脚本位置: $0"
   * echo "任务参数: $1"
   * echo "分片序号 = $2"
   * echo "分片总数 = $3"
   * 
   * echo "Good bye!"
   * exit 0
   */
  scriptContent?: string;
  /**
   * @remarks
   * The script version description.
   * 
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
   * @remarks
   * The token to retrieve the next page of results. If this parameter is empty, no more data is available.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * - A list of script history records.
   */
  records?: ListJobScriptHistoryResponseBodyDataRecords[];
  /**
   * @remarks
   * The total count of entries.
   * 
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
   * @remarks
   * The response code. A value of `200` indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * - The response data.
   */
  data?: ListJobScriptHistoryResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * This parameter is required.
   * 
   * @example
   * not support query script history, please upgrade engine version to 2.2.2+
   */
  message?: string;
  /**
   * @remarks
   * A unique ID for the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
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

