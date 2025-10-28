// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlsLogStoreListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The type of the logging service.
   * 
   * @example
   * Log Service
   */
  consumerSide?: string;
  /**
   * @remarks
   * The time when the logging service was created.
   * 
   * @example
   * 2020-05-18 22:08:46
   */
  createTime?: string;
  /**
   * @remarks
   * The URL of the logging service.
   */
  link?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * thisisatestlogstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * k8s-log-c846f28edbd1d4c6aa9d78c0e********
   */
  project?: string;
  /**
   * @remarks
   * The source of logs. Valid values:
   * 
   * *   Standard output: stdout.log
   * *   File log: the directory that stores logs
   * 
   * @example
   * /var/log/*
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      consumerSide: 'ConsumerSide',
      createTime: 'CreateTime',
      link: 'Link',
      logstore: 'Logstore',
      project: 'Project',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerSide: 'string',
      createTime: 'string',
      link: 'string',
      logstore: 'string',
      project: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlsLogStoreListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * d6834ee9-5045-*************
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of Log Service for the application.
   */
  result?: QuerySlsLogStoreListResponseBodyResult[];
  /**
   * @remarks
   * The number of log sources configured for the application.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QuerySlsLogStoreListResponseBodyResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

