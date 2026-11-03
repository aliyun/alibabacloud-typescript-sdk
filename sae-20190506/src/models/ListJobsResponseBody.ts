// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyDataApplicationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class ListJobsResponseBodyDataApplications extends $dara.Model {
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 0
   */
  active?: number;
  /**
   * @remarks
   * The description of the job template.
   * 
   * @example
   * description
   */
  appDescription?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * f7730764-d88f-4b9a-8d8e-cd8efbfe****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The completion time of the last job.
   * 
   * @example
   * 1657522839
   */
  completionTime?: number;
  /**
   * @remarks
   * The CPU required for each instance. Unit: millicores. The value cannot be 0. Currently, only the following defined specifications are supported:
   * 
   * - **500**
   * - **1000**
   * - **2000**
   * - **4000**
   * - **8000**
   * - **16000**
   * - **32000**
   * 
   * @example
   * 500
   */
  cpu?: number;
  /**
   * @remarks
   * The number of failed instances.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/sae-dev-test/nginx:stable
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether the last change order was executed successfully. Valid values:
   * - **0**: The change order failed.
   * - **1**: The change order succeeded.
   * 
   * @example
   * 1
   */
  lastChangeorderState?: string;
  /**
   * @remarks
   * The running status of the last job. Valid values:
   * 
   * - **0**: not executed
   * - **1**: executed successfully
   * - **2**: execution failed
   * - **3**: executing
   * 
   * @example
   * 0
   */
  lastJobState?: string;
  /**
   * @remarks
   * The start time of the last job.
   * 
   * @example
   * 1657522800
   */
  lastStartTime?: number;
  /**
   * @remarks
   * The memory required for each instance. Unit: MB. The value cannot be 0. The memory has a one-to-one mapping with the CPU. Currently, only the following defined specifications are supported:
   * 
   * - **1024**: corresponds to 500 and 1000 millicores
   * - **2048**: corresponds to 500, 1000, and 2000 millicores
   * - **4096**: corresponds to 1000, 2000, and 4000 millicores
   * - **8192**: corresponds to 2000, 4000, and 8000 millicores
   * - **12288**: corresponds to 12000 millicores
   * - **16384**: corresponds to 4000, 8000, and 16000 millicores
   * - **24576**: corresponds to 12000 millicores
   * - **32768**: corresponds to 16000 millicores
   * - **65536**: corresponds to 8000, 16000, and 32000 millicores
   * - **131072**: corresponds to 32000 millicores
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * The additional information about the operation result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of successful instances.
   * 
   * @example
   * 3
   */
  succeeded?: number;
  /**
   * @remarks
   * Specifies whether the job template is paused.
   * 
   * @example
   * false
   */
  suspend?: boolean;
  /**
   * @remarks
   * The tags of the job template.
   */
  tags?: ListJobsResponseBodyDataApplicationsTags[];
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      completionTime: 'CompletionTime',
      cpu: 'Cpu',
      failed: 'Failed',
      imageUrl: 'ImageUrl',
      lastChangeorderState: 'LastChangeorderState',
      lastJobState: 'LastJobState',
      lastStartTime: 'LastStartTime',
      mem: 'Mem',
      message: 'Message',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      succeeded: 'Succeeded',
      suspend: 'Suspend',
      tags: 'Tags',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      completionTime: 'number',
      cpu: 'number',
      failed: 'number',
      imageUrl: 'string',
      lastChangeorderState: 'string',
      lastJobState: 'string',
      lastStartTime: 'number',
      mem: 'number',
      message: 'string',
      namespaceId: 'string',
      regionId: 'string',
      succeeded: 'number',
      suspend: 'boolean',
      tags: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplicationsTags },
      triggerConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of job templates.
   */
  applications?: ListJobsResponseBodyDataApplications[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of job templates.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or POP error code. Valid values:
   * 
   * - **2xx**: success
   * - **3xx**: redirection
   * - **4xx**: client error
   * - **5xx**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of job templates.
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error code. Take note of the following items:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section of this topic.
   * 
   * @example
   * InvalidAppId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the operation result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the job template list was queried successfully. Valid values:
   * 
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of job templates.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListJobsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
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

