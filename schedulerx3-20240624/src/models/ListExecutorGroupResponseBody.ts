// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorGroupResponseBodyDataRecordsCiteList extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Tornado
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
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
   * @remarks
   * The client key.
   * 
   * @example
   * f/HElmWgOgmb0mlbRRkNuQ==
   */
  apiKey?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * api_key
   */
  authType?: string;
  /**
   * @remarks
   * Specifies whether to enable **automatic start and stop**. Valid values:
   * - true: Enabled. If no tasks are scheduled for a period of time, the agent automatically hibernates. If tasks are scheduled for a period of time, the agent wakes up in advance.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The list of referenced applications.
   */
  citeList?: ListExecutorGroupResponseBodyDataRecordsCiteList[];
  /**
   * @remarks
   * The CloudMonitor workspace.
   * 
   * @example
   * scx-workspace-acd09a5d-4133-43cc-889d-c33a122afb6e
   */
  cmsWorkspaceId?: string;
  /**
   * @remarks
   * The current number of tasks.
   * 
   * @example
   * 10
   */
  currentJobs?: number;
  /**
   * @remarks
   * The description of the executor group.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  enableJobs?: number;
  /**
   * @remarks
   * The integration method. Valid values:
   * - manual
   * - acs_sandbox
   * - k8s_service
   * 
   * @example
   * acs_sandbox
   */
  integrationType?: string;
  /**
   * @remarks
   * The maximum number of tasks.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * The name of the executor group.
   * 
   * @example
   * job01
   */
  name?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * @example
   * public
   */
  network?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The list of resolved workers.
   * 
   * @example
   * [{"address":"http://192.168.2.34:8084"}]
   */
  resolvedWorkers?: string;
  /**
   * @remarks
   * The ID of the executor group.
   * 
   * @example
   * 12
   */
  workerId?: number;
  /**
   * @remarks
   * The executor type.
   * 
   * @example
   * k8s_service
   */
  workerType?: string;
  /**
   * @remarks
   * The list of specified machines in JSON format.
   * 
   * @example
   * [{"address":"http://47.111.188.191:18789"}]
   */
  workers?: string;
  /**
   * @remarks
   * The extended parameters.
   * 
   * @example
   * {}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      authType: 'AuthType',
      autoScale: 'AutoScale',
      citeList: 'CiteList',
      cmsWorkspaceId: 'CmsWorkspaceId',
      currentJobs: 'CurrentJobs',
      description: 'Description',
      enableJobs: 'EnableJobs',
      integrationType: 'IntegrationType',
      maxJobs: 'MaxJobs',
      name: 'Name',
      network: 'Network',
      protocol: 'Protocol',
      resolvedWorkers: 'ResolvedWorkers',
      workerId: 'WorkerId',
      workerType: 'WorkerType',
      workers: 'Workers',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      authType: 'string',
      autoScale: 'boolean',
      citeList: { 'type': 'array', 'itemType': ListExecutorGroupResponseBodyDataRecordsCiteList },
      cmsWorkspaceId: 'string',
      currentJobs: 'number',
      description: 'string',
      enableJobs: 'number',
      integrationType: 'string',
      maxJobs: 'number',
      name: 'string',
      network: 'string',
      protocol: 'string',
      resolvedWorkers: 'string',
      workerId: 'number',
      workerType: 'string',
      workers: 'string',
      XAttrs: 'string',
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
   * @remarks
   * The current page number.
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
   * -
   */
  records?: ListExecutorGroupResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
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
   * @remarks
   * The total count of data under the current request conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The query results.
   */
  data?: ListExecutorGroupResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries to return for this request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the current call returns data. An empty value indicates that all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * The token that specifies the position from which the current call returns data. An empty value indicates that all data has been read. You do not need to specify this parameter for the first query.
   * 
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
   * @remarks
   * Indicates whether the request is successful.
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

