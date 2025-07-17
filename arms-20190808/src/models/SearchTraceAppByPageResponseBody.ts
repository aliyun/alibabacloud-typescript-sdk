// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTraceAppByPageResponseBodyPageBeanTraceAppsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBodyPageBeanTraceApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 123
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The timestamp generated when the task was created.
   * 
   * @example
   * 1531291867000
   */
  createTime?: number;
  /**
   * @remarks
   * The aliases of the application.
   */
  labels?: string[];
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the application is displayed in the Application Real-Time Monitoring Service (ARMS) console. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * true
   */
  show?: boolean;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: SearchTraceAppByPageResponseBodyPageBeanTraceAppsTags[];
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * *   `TRACE`: Application Monitoring
   * *   `RETCODE`: Browser Monitoring
   * 
   * @example
   * TRACE
   */
  type?: string;
  /**
   * @remarks
   * The timestamp generated when the task information was updated.
   * 
   * @example
   * 1531291867000
   */
  updateTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 113197164949****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      labels: 'Labels',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      show: 'Show',
      tags: 'Tags',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      show: 'boolean',
      tags: { 'type': 'array', 'itemType': SearchTraceAppByPageResponseBodyPageBeanTraceAppsTags },
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the monitoring task.
   */
  traceApps?: SearchTraceAppByPageResponseBodyPageBeanTraceApps[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByPageResponseBodyPageBeanTraceApps },
    };
  }

  validate() {
    if(Array.isArray(this.traceApps)) {
      $dara.Model.validateArray(this.traceApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the array object.
   */
  pageBean?: SearchTraceAppByPageResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B446DF2-3DDD-4B5B-8E3F-D5225120****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchTraceAppByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

