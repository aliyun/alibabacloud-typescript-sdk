// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorGroupResponseBodyDataRecordsCiteList extends $dara.Model {
  /**
   * @example
   * Tornado
   */
  appName?: string;
  /**
   * @example
   * group1
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorGroupResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * f/HElmWgOgmb0mlbRRkNuQ==
   */
  apiKey?: string;
  /**
   * @example
   * api_key
   */
  authType?: string;
  citeList?: ListExecutorGroupResponseBodyDataRecordsCiteList[];
  /**
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @example
   * job01
   */
  name?: string;
  /**
   * @example
   * public
   */
  network?: string;
  /**
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @example
   * 12
   */
  workerId?: number;
  /**
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @example
   * [{"address":"http://47.111.188.191:18789"}]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      authType: 'AuthType',
      citeList: 'CiteList',
      description: 'Description',
      name: 'Name',
      network: 'Network',
      protocol: 'Protocol',
      workerId: 'WorkerId',
      workerType: 'WorkerType',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      authType: 'string',
      citeList: { 'type': 'array', 'itemType': ListExecutorGroupResponseBodyDataRecordsCiteList },
      description: 'string',
      name: 'string',
      network: 'string',
      protocol: 'string',
      workerId: 'number',
      workerType: 'string',
      workers: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.citeList)) {
      $dara.Model.validateArray(this.citeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorGroupResponseBodyData extends $dara.Model {
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
   * @remarks
   * -
   */
  records?: ListExecutorGroupResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListExecutorGroupResponseBodyDataRecords },
      total: 'number',
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

export class ListExecutorGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListExecutorGroupResponseBodyData;
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
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
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
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListExecutorGroupResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

