// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlsLogStoreListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service type.
   * 
   * @example
   * Simple Log Service
   */
  consumerSide?: string;
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2020-05-18 22:08:46
   */
  createTime?: string;
  /**
   * @remarks
   * The Simple Log Service link.
   */
  link?: string;
  /**
   * @remarks
   * The Logstore name.
   * 
   * @example
   * thisisatestlogstore
   */
  logstore?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * k8s-log-c846f28edbd1d4c6aa9d78c0e********
   */
  project?: string;
  /**
   * @remarks
   * The log source. Valid values:
   * 
   * - Standard output: stdout.log.
   * - File log: the collection path.
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d6834ee9-5045-*************
   */
  requestId?: string;
  /**
   * @remarks
   * The Simple Log Service configuration results.
   */
  result?: QuerySlsLogStoreListResponseBodyResult[];
  /**
   * @remarks
   * The total number of Simple Log Service configurations.
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

